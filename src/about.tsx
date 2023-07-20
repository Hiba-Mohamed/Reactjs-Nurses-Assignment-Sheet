

export function AboutPage() {
    return (

        <div className="bg-cover bg-repeat bg-opacity-10" style={{ backgroundImage: `url('images/banner-pic.png')` }}>

        <div className="font-nunito flex flex-col relative max-w-5xl mx-auto pt-20 sm:pt-12 lg:pt-18 inner-shadow rounded">
                  <h3 className="font-bold"> What is the NAS?</h3>
                <p className="what">The NAS (Nurses Assignment Sheet) is an electronic document that replaces the paper based nurses
                    assignment sheet used in some healthcare settings. It is used to communicate vital information to nurses
                    throughout the shift.
                </p>
                <p>The NAS provides nurses with clear patient assignments and outlines their expected duties.
                    Additionally, the NAS enables efficient information sharing among healthcare professionals and
                    administrative staff by providing a comprehensive overview of patient assignments and workload for a given
                    shift in the unit.
                </p>
            </div>


            <div className="font-nunito flex flex-col relative max-w-5xl mx-auto pt-20 sm:pt-12 lg:pt-18 inner-shadow rounded">
                <h3 className="font-bold"> Why use the NAS?</h3>

                <p>Using the NAS offers several advantages including, but not limited to:</p>
                <ul className="list">
                    <li>
                        <strong>Efficiency:</strong> Electronic assignment sheets streamline the process of assigning and communicating
                        patient information to nurses. They eliminate the need for manual entry and allow for real-time updates,
                        reducing administrative burden and saving time. </li>
                    <li>
                        <strong>Error Reduction:</strong> Electronic nurses' assignment sheets contribute to a reduction in errors compared to
                        their paper-based counterparts. With electronic systems, information can be entered and updated
                        accurately, minimizing the risk of transcription errors, illegible handwriting, or duplication errors.
                    </li>
                    <li>
                        <strong>Data Analysis and Reporting: </strong>Electronic systems can capture and store data, allowing for analysis and
                        reporting on patient outcomes, workload distribution, and overall unit performance. This data-driven
                        approach helps healthcare facilities identify trends, optimize resource allocation, and make informed
                        decisions to improve patient care and operational efficiency. </li>
                    <li>
                        <strong>Environmental Impact:</strong> Shifting from paper-based assignment sheets to electronic ones reduces paper
                        consumption and promotes sustainability. This environmentally-friendly approach aligns with the goals of
                        healthcare organizations to minimize waste and adopt greener practices. </li>
                </ul>

            </div>

            <div>


            <div className="font-nunito flex flex-col relative max-w-5xl mx-auto pt-20 sm:pt-12 lg:pt-18 inner-shadow rounded">
                    <h3 className="font bold"> The unique features of the NAS:</h3>

                    <div className="feature-box">

                        <img className="side-icon" src="access-control.png" alt="controlled access icon"></img>

                        <h4>Regulated access</h4>
                        <p>
                            Electronic nurses' assignment sheets offer regulated access, ensuring that only authorized users
                            can view and make changes to the document. Access can be restricted to healthcare professionals
                            involved in patient care, preventing unauthorized individuals from tampering with or accessing
                            sensitive information.
                        </p>

                    </div>

                    <div className="font-nunito flex flex-col relative max-w-5xl mx-auto pt-20 sm:pt-12 lg:pt-18 inner-shadow rounded">

                        <img className="side-icon" src="calendar.png" alt=""></img>

                        <h4 className="">Automatically displaying the date</h4>
                        <p>
                            The NAS can automatically update the date, ensuring that the document reflects the most current
                            information. This feature eliminates the need for manual date entries and reduces the risk of
                            outdated or inaccurate information. Nurses and other healthcare professionals can rely on the
                            electronic system to provide them with real-time information, including the date of patient
                            assignments, updates, and any changes made to the sheet.
                        </p>
                    </div>

                    <div className="feature-box">

                        <img className="side-icon" src="shield.png" alt=""></img>

                        <h4>Duplication Safeguards</h4>
                        <p>
                            Electronic nurses' assignment sheets incorporate safeguards to prevent the duplication of
                            nurses' names, patient names, or room numbers. The electronic system can employ validation rules
                            and checks to ensure that each entry is unique and that no duplicates are allowed. This helps
                            avoid confusion, potential mix-ups, or errors caused by inadvertently assigning multiple nurses
                            to the same patient or assigning the same patient to multiple nurses. By implementing these
                            safeguards, the electronic assignment sheet promotes accuracy, reduces the risk of data
                            duplication, and contributes to maintaining clear and unambiguous patient assignments.
                        </p>

                    </div>
                </div>

            </div>
        </div >
    )
}

export default AboutPage