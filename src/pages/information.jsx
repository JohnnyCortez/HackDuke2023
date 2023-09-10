import { useEffect, useState } from "react";

function Information() {

    return (
        <>
        {/* <h2>Information</h2> */}

<div class="information-reduce">
    <h2> Reduce Your Carbon Footprint 🌱 </h2>


    <div class="carbon-footprint-container">
        <p> 
        <b>Reducing</b> your carbon footprint is an important step towards <b>mitigating</b> climate change and <b>minimizing</b> your environmental impact.
        <br></br> <br></br>       
        Here are <b>10 strategies</b> and lifestyle changes you can consider to reduce your carbon footprint:
        </p>
        <div id="carbon-footprint-img">
            <img src="https://static01.nyt.com/images/2019/05/07/smarter-living/07carbonfootprint-slide-SUBX/carbonfootprint-slide-SUBX-jumbo.jpg" alt = "People taking a look at their carbon footprint"></img>
        </div>
    </div>

    <h3> 1. Energy Efficiency: </h3>
        <div class = "intext-pic-container">
            <img src = "https://static01.nyt.com/images/2019/04/11/smarter-living/carbonfootprint-slide-D3TJ/carbonfootprint-slide-D3TJ-jumbo.jpg" alt = "Carbon emissions come from the home" ></img>
        <ul> 
            <li>Use energy-efficient appliances, such as low-flow showerheads and LED light bulbs.</li>
            <li>Properly insulate your home to reduce heating and cooling needs.</li>
            <li>Seal drafts around windows and doors.</li>
            <li>Set your thermostat to an energy-saving temperature.</li>
            <li>Unplug or turn off electronics when not in use.</li>
            <li>Consider installing solar panels to generate renewable energy.</li>
        </ul>
        <br></br>
        </div>


   <h3>2. Transportation:</h3>
        <div class = "intext-pic-container">
            <img src = "https://static01.nyt.com/images/2018/02/08/smarter-living/carbonfootprint-slide-664U/carbonfootprint-slide-664U-jumbo.jpg" alt = "On the left, it shows carbon emissions and pollutions being contributed by vehicles, factories, and airplanes. Contrastly, on the right, individuals are riding bikes, using buses, and electric vehicles."></img>
        <ul> 
            <li>Use public transportation, carpool, or rideshare to reduce the number of individual vehicle trips.</li>
            <li>Choose fuel-efficient and low-emission vehicles if possible.</li>
            <li>Walk, bike, or use an electric scooter for short trips.</li>
            <li>Plan your errands to reduce the number of trips and use online shopping to consolidate deliveries.</li>
            <li>Air travel has a significant carbon footprint. Consider alternatives like video conferences for business meetings and vacation destinations closer to home.</li>
        </ul>
    <br></br>
        </div>

   {/* <h3>3. Reduce, Reuse, Recycle:</h3>
    <ul> 
        <li>Reduce your consumption of single-use products and packaging.</li>
        <li>Reuse items whenever possible.</li>
        <li>Recycle paper, plastic, glass, and metal according to your local recycling program.</li>
        <li>Properly dispose of hazardous waste and electronics.</li>
        <li>Compost organic waste like kitchen scraps and yard trimmings to reduce landfill methane emissions.</li>
    </ul>
   <br></br> */}

   <h3>3. Food Choices:</h3>
        <div class = "intext-pic-container">
            <img src = "https://static01.nyt.com/images/2018/02/08/smarter-living/carbonfootprint-slide-1Z50/carbonfootprint-slide-1Z50-jumbo.jpg" alt = "On the left, it shows carbon emissions and pollutions being contributed by vehicles, factories, and airplanes. Contrastly, on the right, individuals are riding bikes, using buses, and electric vehicles."></img>
        <ul> 
            <li>Reduce meat consumption, particularly red meat and processed meats.</li>
            <li>Choose locally sourced and seasonal foods to reduce transportation emissions.</li>
            <li>Minimize food waste by planning meals and storing food properly.</li>
            <li>Support sustainable farming practices.</li>
        </ul>
        <br></br>
        </div>

   <h3>4. Use Sustainable Products:</h3>
   <div class = "intext-pic-container">
            <img src = "https://static01.nyt.com/images/2018/02/08/smarter-living/carbonfootprint-slide-06BT/carbonfootprint-slide-06BT-jumbo.jpg" alt = "Global emissions come from manufactured clothes (and other items) and from the factories of companies we buy products from."></img>
        <ul>
            <li> Support products and companies that prioritize sustainability, such as those using renewable materials, reducing waste, or practicing fair trade.</li>
            <li> Consider purchasing carbon offsets to compensate for your unavoidable emissions. These investments can fund projects like reforestation or renewable energy development.</li>
        </ul>
        <br></br>
    </div>


   <h3>5. Advocate for Change:</h3>
   <div class = "intext-pic-container">
            <img src = "https://static01.nyt.com/images/2018/02/08/smarter-living/carbonfootprint-slide-25J6/carbonfootprint-slide-25J6-jumbo.jpg" alt = "Advocate for change to save the planet."></img>
    
        <ul>
        <li> Stay informed about climate change and share information with friends and family to raise awareness.</li>
            <li> Support policies and initiatives that promote sustainability and carbon reduction at the local, national, and global levels.</li>
            <li> Advocate for clean energy, conservation efforts, and sustainable transportation options. </li>
        </ul>
        <br></br>
    </div>


<div class = "general">
<p> 
Reducing your carbon footprint is a gradual process that involves making sustainable choices in various aspects of your life. It's important to remember that every small change you make can contribute to a more sustainable and environmentally friendly lifestyle. Start with manageable steps, and over time, you can make a significant positive impact on the environment.
</p>
</div>

{/* <div class = "plant">
    <p>
    🌱
    </p>
</div> */}




</div>

<br></br>
<br></br>



{/* <h3> Offsetting videos </h3> maybe have them play at front? */}





        </>
    )
}

export default Information