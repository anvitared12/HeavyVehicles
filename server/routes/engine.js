const express = require("express");
const router = express.Router();
const EngineInput = require("../models/EngineInput");

// Utility function to check power range
const isPowerInRange = (power, min, max) => {
  const numeric = parseInt(power);
  return !isNaN(numeric) && numeric >= min && numeric <= max;
};

router.post("/engine-info", async (req, res) => {
  const {
    EngineNumber,
    Displacement,
    Power_Output,
    Emmision_Norm,
    FuelType,
    userId,
  } = req.body;

  // Save the input to DB
  try {
    const newEntry = new EngineInput({
      EngineNumber,
      Displacement,
      Power_Output,
      Emmision_Norm,
      FuelType,
      userId,
    });

    await newEntry.save();
    console.log("✅ Engine data saved with userId");
  } catch (err) {
    console.error("❌ Error saving to DB:", err);
  }

  let result = [];

  // First engine match group
  if (
    (EngineNumber === "BharatBenz 4D34i CRDI" &&
      Displacement === "9.3 l" &&
      Power_Output === "170 hp" &&
      Emmision_Norm === "BS-VI" &&
      FuelType === "Diesel") ||
    (EngineNumber === "Weichai WP7NG" &&
      Displacement === "7L" &&
      Power_Output.includes("300") &&
      Emmision_Norm === "BS-VI CNG" &&
      FuelType === "CNG") ||
    (EngineNumber === "Cummins ISB6.7" &&
      Displacement === "6.7L" &&
      isPowerInRange(Power_Output, 200, 300) &&
      Emmision_Norm === "BS-VI" &&
      (FuelType === "Diesel" || FuelType === "CNG")) ||
    (EngineNumber === "Volvo D13K" &&
      Displacement === "13L" &&
      isPowerInRange(Power_Output, 420, 540) &&
      Emmision_Norm === "BS-VI" &&
      FuelType === "Diesel") ||
    (EngineNumber === "Mercedes-Benz OM 457" &&
      Displacement === "12L" &&
      isPowerInRange(Power_Output, 360, 428) &&
      Emmision_Norm === "BS-VI" &&
      FuelType === "Diesel")
  ) {
    result = [
      {
        EmissionNorm: "BS-III Diesel",
        EngineNumber: "Cummins ISB6.7 BS-VI",
        Power_Output: "200–300 HP",
        FuelType: "Diesel",
        ApproximateCost: "₹8–12 Lakhs",
      },
      {
        EmissionNorm: "BS-IV Diesel",
        EngineNumber: "Weichai WP7NG BS-VI",
        Power_Output: "~300 HP",
        FuelType: "CNG",
        ApproximateCost: "₹10–14 Lakhs",
      },
      {
        EmissionNorm: "BS-III/IV Diesel",
        EngineNumber: "Electric Retrofit Kit",
        Power_Output: "N/A",
        FuelType: "Electric",
        ApproximateCost: "₹15–20 Lakhs",
      },
    ];

    return res.json({ result });
  }

  // Second engine match group
  if (
    (EngineNumber === "Cummins ISX15" &&
      Displacement === "14.9L" &&
      isPowerInRange(Power_Output, 400, 600) &&
      Emmision_Norm === "BS-VI" &&
      FuelType.includes("Diesel")) ||
    (EngineNumber === "Detroit Diesel DD15" &&
      Displacement === "14.8L" &&
      isPowerInRange(Power_Output, 400, 505) &&
      Emmision_Norm === "BS-VI" &&
      FuelType === "Diesel") ||
    (EngineNumber === "Paccar MX-13" &&
      Displacement === "12.9L" &&
      isPowerInRange(Power_Output, 405, 510) &&
      Emmision_Norm === "BS-VI" &&
      FuelType === "Diesel") ||
    (EngineNumber === "Volvo D13K" &&
      Displacement === "13L" &&
      isPowerInRange(Power_Output, 420, 540) &&
      Emmision_Norm === "BS-VI" &&
      FuelType === "Diesel") ||
    (EngineNumber === "Mercedes-Benz OM 473" &&
      Displacement === "15.6L" &&
      Power_Output === "625 HP" &&
      Emmision_Norm === "BS-VI" &&
      FuelType.includes("Diesel"))
  ) {
    result = [
      {
        EngineNumber: "Electric Drivetrain Retrofit",
        EmissionNorm: "Zero Emission",
        Power_Output: "Varies (Equivalent Performance)",
        FuelType: "Electric",
        ApproximateCost: "₹18–25 Lakhs",
      },
      {
        EngineNumber: "Hybrid Kit Upgrade (Cummins/Volvo)",
        EmissionNorm: "BS-VI Hybrid",
        Power_Output: "Optimized",
        FuelType: "Hybrid Diesel/Electric",
        ApproximateCost: "₹12–20 Lakhs",
      },
      {
        EngineNumber: "Advanced BS6.2 Engine (OEM Specific)",
        EmissionNorm: "BS6.2 / Euro VI-D",
        Power_Output: "400–600 HP",
        FuelType: "Diesel (Low Emission)",
        ApproximateCost: "₹10–15 Lakhs",
      },
    ];

    return res.json({ result });
  }

  // Default response if no match found
  return res.json({
    result: [
      {
        message: "No matching engine found.",
      },
    ],
  });
});

module.exports = router;
