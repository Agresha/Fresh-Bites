import React from "react";
import './common.css'
function Common({title}){
    return(
        <div>
            <section className="common__section">
                <div className="container">
                    <h2 className="text-white">{title}</h2>
                </div>
            </section>
        </div>
    )
}
export default Common;