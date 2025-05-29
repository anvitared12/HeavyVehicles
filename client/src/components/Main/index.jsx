 import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;

// import React, { useState } from "react";
// import axios from "axios";
// import styles from "./styles.module.css";

// const EngineForm = () => {
//   const [formData, setFormData] = useState({
//     EngineNumber: "",
//     Displacement: "",
//     Power_Output: "",
//     Emmision_Norm: "",
//     FuelType: ""
//   });

//   const [result, setResult] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/engine-info", formData);
//       setResult(response.data.result);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setResult([{ message: "Server error or invalid input." }]);
//     }
//   };

//   return (
//     <div className={styles.formContainer}>
//       <h2 className={styles.title}>Engine Information Form</h2>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input name="EngineNumber" value={formData.EngineNumber} onChange={handleChange} placeholder="Engine Number" required className={styles.input} />
//         <input name="Displacement" value={formData.Displacement} onChange={handleChange} placeholder="Displacement" required className={styles.input} />
//         <input name="Power_Output" value={formData.Power_Output} onChange={handleChange} placeholder="Power Output" required className={styles.input} />
//         <input name="Emmision_Norm" value={formData.Emmision_Norm} onChange={handleChange} placeholder="Emission Norm" required className={styles.input} />
//         <input name="FuelType" value={formData.FuelType} onChange={handleChange} placeholder="Fuel Type" required className={styles.input} />
//         <button type="submit" className={styles.button}>Submit</button>
//       </form>

//       {result && (
//         <div className={styles.result}>
//           <h3>Result:</h3>
//           {result.map((item, index) => (
//             <div className={styles.resultCard} key={index}>
//               {item.message ? (
//                 <p>{item.message}</p>
//               ) : (
//                 <>
//                   <p><strong>Engine:</strong> {item.EngineNumber}</p>
//                   <p><strong>Emission Norm:</strong> {item.EmissionNorm}</p>
//                   <p><strong>Power Output:</strong> {item.Power_Output}</p>
//                   <p><strong>Fuel Type:</strong> {item.FuelType}</p>
//                   <p><strong>Cost:</strong> {item.ApproximateCost}</p>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
      
//     </div>
//   );
// };

// export default EngineForm;



