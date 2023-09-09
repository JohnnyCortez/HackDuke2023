import { useEffect, useState } from "react";

function Information() {

    return (
        <>
        {/* <h2>Information</h2> */}

<div class="information-reduce">
    <h2> Reduce Your Carbon Footprint 🌱 </h2>


    <div class="carbon-footprint-container">
        <p> 
        Reducing your carbon footprint is an important step towards mitigating climate change and minimizing your environmental impact. <br>
        </br>       
        Here are several strategies and lifestyle changes you can consider to reduce your carbon footprint:
        </p>
        <div id="carbon-footprint-img">
            <img src="https://static01.nyt.com/images/2019/05/07/smarter-living/07carbonfootprint-slide-SUBX/carbonfootprint-slide-SUBX-jumbo.jpg" alt = "People taking a look at their carbon footprint"></img>
        </div>
    </div>

    

    <h3> 1. Energy Efficiency: </h3>
    <ul> 
        <li>Use energy-efficient appliances and light bulbs.</li>
        <li>Properly insulate your home to reduce heating and cooling needs.</li>
        <li>Seal drafts around windows and doors.</li>
        <li>Set your thermostat to an energy-saving temperature.</li>
        <li>Unplug or turn off electronics when not in use.</li>
        <li>Consider installing solar panels to generate renewable energy.</li>
    </ul>
   <br></br>

   <h3>2.Transportation:</h3>
    <ul> 
        <li>Use public transportation, carpool, or rideshare to reduce the number of individual vehicle trips.</li>
        <li>Choose fuel-efficient and low-emission vehicles if possible.</li>
        <li>Walk, bike, or use an electric scooter for short trips.</li>
        <li>Plan your errands to reduce the number of trips and use online shopping to consolidate deliveries.</li>
        <li>Air travel has a significant carbon footprint. Consider alternatives like video conferences for business meetings and vacation destinations closer to home.</li>
    </ul>
   <br></br>

   <h3>3. Reduce, Reuse, Recycle:</h3>
    <ul> 
        <li>Reduce your consumption of single-use products and packaging.</li>
        <li>Reuse items whenever possible.</li>
        <li>Recycle paper, plastic, glass, and metal according to your local recycling program.</li>
        <li>Properly dispose of hazardous waste and electronics.</li>
    </ul>
   <br></br>


   <h3>4. Water Conservation:</h3>
    <ul> 
        <li>Fix leaks and install water-saving fixtures in your home.</li>
        <li>Use a low-flow showerhead and faucet aerators.</li>
        <li>Collect rainwater for outdoor use.</li>
        <li>Only run the dishwasher and washing machine with full loads.</li>
    </ul>
   <br></br>

   <h3>5. Food Choices:</h3>
    <ul> 
        <li>Reduce meat consumption, particularly red meat and processed meats.</li>
        <li>Choose locally sourced and seasonal foods to reduce transportation emissions.</li>
        <li>Minimize food waste by planning meals and storing food properly.</li>
        <li>Support sustainable farming practices.</li>
    </ul>
   <br></br>

   <h3>6. Composting:</h3>
   <ul>
    <li> Start composting organic waste like kitchen scraps and yard trimmings to reduce landfill methane emissions.
    </li>
   </ul>
   <br></br>

   <h3>7. Use Sustainable Products:</h3>
   <ul>
    <li> Support products and companies that prioritize sustainability, such as those using renewable materials, reducing waste, or practicing fair trade.
    </li>
   </ul>
   <br></br>


   <h3>8. Advocate for Change:</h3>
   <ul>
    <li> Support policies and initiatives that promote sustainability and carbon reduction at the local, national, and global levels.</li>
    <li> Advocate for clean energy, conservation efforts, and sustainable transportation options. </li>
   </ul>
   <br></br>

   <h3>9. Carbon Offsets:</h3>
   <ul>
    <li> Consider purchasing carbon offsets to compensate for your unavoidable emissions. These investments can fund projects like reforestation or renewable energy development.</li>
   </ul>
   <br></br>

   <h3>10. Educate Yourself and Others:</h3>
   <ul>
    <li> Stay informed about climate change and share information with friends and family to raise awareness.</li>
   </ul>
   <br></br>

Reducing your carbon footprint is a gradual process that involves making sustainable choices in various aspects of your life. It's important to remember that every small change you make can contribute to a more sustainable and environmentally friendly lifestyle. Start with manageable steps, and over time, you can make a significant positive impact on the environment.

</div>




<h3> Cleanups near me </h3>
<iframe
src='//www.epa.gov/sites/production/files/widgets/ef-cleanups.html'
id="cleanups"
width="225"
height="250"
scrolling="no"
frameborder="0"
marginwidth="3"
marginheight="0">
</iframe>


<h3> Offsetting videos </h3> {/* maybe have them play at front? */}





        </>
    )
}

export default Information