import React from "react";
import { connect } from "react-redux";
import { fetchPopular, clearMovie } from "../../actions";

import MovieCard from '../MovieCard';

class Home extends React.Component {
    componentDidMount() {
        // Once the component has mounted fire the fetchPopular Action
        this.props.fetchPopular();
    }
    
    renderPopular() {
        // Ajax Spinner for loading
        if(this.props.results.data === undefined) return <div>Loading... </div>

        return this.props.results.data.map(
            film =>
                <MovieCard key={film.id} film={film} />
        );        
    }
    
    render() {
        return (
            <div className="container">
                <h1>Movies</h1>
                <div className="row">
                    { this.renderPopular() }
                </div>




                <p>http://www.slashfilm.com/category/hdtgm/</p>




                <table class="wikitable plainrowheaders">
<tbody>
<tr>
<td>"<i><a href="/wiki/Season_of_the_Witch_(2011_film)" title="Season of the Witch (2011 film)">Season of the Witch</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Last_Airbender" title="The Last Airbender">The Last Airbender</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Battlefield_Earth_(film)" title="Battlefield Earth (film)">Battlefield Earth</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/All_About_Steve" title="All About Steve">All About Steve</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Sucker_Punch_(2011_film)" title="Sucker Punch (2011 film)">Sucker Punch</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Fast_Five" title="Fast Five">Fast Five</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Mac_and_Me" title="Mac and Me">Mac and Me</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Crank:_High_Voltage" title="Crank: High Voltage">Crank: High Voltage</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Back-up_Plan" title="The Back-up Plan">The Back-up Plan</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Skyline_(2010_film)" title="Skyline (2010 film)">Skyline</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Wicker_Man_(2006_film)" title="The Wicker Man (2006 film)">The Wicker Man</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/I_Know_Who_Killed_Me" title="I Know Who Killed Me">I Know Who Killed Me</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Leprechaun:_In_the_Hood" title="Leprechaun: In the Hood">Leprechaun: In the Hood</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Superman_III" title="Superman III">Superman III</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Superman_III" title="Superman III">Superman III</a></i>: Bonus!"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Catwoman_(film)" title="Catwoman (film)">Catwoman</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Jingle_All_the_Way" title="Jingle All the Way">Jingle All the Way</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Twilight_Saga:_Breaking_Dawn_%E2%80%93_Part_1" title="The Twilight Saga: Breaking Dawn – Part 1">The Twilight Saga: Breaking Dawn – Part 1</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Crank_(film)" title="Crank (film)">Crank</a>: Director's Edition</i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Trespass_(2011_film)" title="Trespass (2011 film)">Trespass</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Cool_as_Ice" title="Cool as Ice">Cool as Ice</a>: Director's Edition</i>"</td>
<td><small><span title="Not available">N/A</span></small></td>
</tr>
<tr>
<td>"<i><a href="/wiki/Birdemic:_Shock_and_Terror" title="Birdemic: Shock and Terror">Birdemic: Shock and Terror</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/88_Minutes" title="88 Minutes">88 Minutes</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Abduction_(2011_film)" title="Abduction (2011 film)">Abduction</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Adventures_of_Pluto_Nash" title="The Adventures of Pluto Nash">The Adventures of Pluto Nash</a></i>"</td>
<td><small><span title="Not available">N/A</span></small></td>
</tr>
<tr>
<td>"<i><a href="/wiki/Tiptoes" title="Tiptoes">Tiptoes</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/On_the_Line_(2001_film)" title="On the Line (2001 film)">On the Line</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Speed_2:_Cruise_Control" title="Speed 2: Cruise Control">Speed 2: Cruise Control</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Bad_Ass_(film)" title="Bad Ass (film)">Bad Ass</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Godzilla_(1998_film)" title="Godzilla (1998 film)">Godzilla</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Judge_Dredd_(film)" title="Judge Dredd (film)">Judge Dredd</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Spider-Man_3" title="Spider-Man 3">Spider-Man 3</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Batman_%26_Robin_(film)" title="Batman &amp; Robin (film)">Batman &amp; Robin</a></i>"</td>
<td><small><span title="Not available">N/A</span></small></td>
</tr>
<tr>
<td>"<i><a href="/wiki/Wild_Wild_West" title="Wild Wild West">Wild Wild West</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Jaws_4:_The_Revenge" title="Jaws 4: The Revenge">Jaws 4: The Revenge</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Road_House_(1989_film)" title="Road House (1989 film)">Road House</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Barb_Wire_(film)" title="Barb Wire (film)">Barb Wire</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Super_Mario_Bros._(film)" title="Super Mario Bros. (film)">Super Mario Bros.</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Sleepaway_Camp" title="Sleepaway Camp">Sleepaway Camp</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Cobra_(1986_film)" title="Cobra (1986 film)">Cobra</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Twilight_Saga:_Breaking_Dawn_%E2%80%93_Part_2" title="The Twilight Saga: Breaking Dawn – Part 2">The Twilight Saga: Breaking Dawn&nbsp;– Part 2</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Liz_%26_Dick" title="Liz &amp; Dick">Liz &amp; Dick</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Reindeer_Games" title="Reindeer Games">Reindeer Games</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Anaconda_(film)" title="Anaconda (film)">Anaconda</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Odd_Life_of_Timothy_Green" title="The Odd Life of Timothy Green">The Odd Life of Timothy Green</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Devil%27s_Advocate_(1997_film)" title="The Devil's Advocate (1997 film)">The Devil's Advocate</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Nothing_but_Trouble_(1991_film)" title="Nothing but Trouble (1991 film)">Nothing But Trouble</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/From_Justin_to_Kelly" title="From Justin to Kelly">From Justin to Kelly</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/In_the_Name_of_the_King" title="In the Name of the King">In the Name of the King</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Street_Fighter_(1994_film)" title="Street Fighter (1994 film)">Street Fighter</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Stop!_Or_My_Mom_Will_Shoot" title="Stop! Or My Mom Will Shoot">Stop! Or My Mom Will Shoot</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Joyful_Noise_(film)" title="Joyful Noise (film)">Joyful Noise</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Fast_%26_Furious_6" title="Fast &amp; Furious 6">Fast &amp; Furious 6</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/After_Earth" title="After Earth">After Earth</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Howard_the_Duck_(film)" title="Howard the Duck (film)">Howard the Duck</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Demolition_Man_(film)" title="Demolition Man (film)">Demolition Man</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Sharknado" title="Sharknado">Sharknado</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Over_the_Top_(film)" title="Over the Top (film)">Over The Top</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Crocodile_Dundee_in_Los_Angeles" title="Crocodile Dundee in Los Angeles">Crocodile Dundee in Los Angeles</a></i>"</td>
<td><small><span title="Not available">N/A</span></small></td>
</tr>
<tr>
<td>"<i><a href="/wiki/Gymkata" title="Gymkata">Gymkata</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Glimmer_Man" title="The Glimmer Man">The Glimmer Man</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Toys_(film)" title="Toys (film)">Toys</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Congo_(film)" title="Congo (film)">Congo</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Halloween_III:_Season_of_the_Witch" title="Halloween III: Season of the Witch">Halloween III: Season of the Witch</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Daredevil_(film)" title="Daredevil (film)">Daredevil</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Fair_Game_(1995_film)" title="Fair Game (1995 film)">Fair Game</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Hudson_Hawk" title="Hudson Hawk">Hudson Hawk</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Crossroads_(2002_film)" title="Crossroads (2002 film)">Crossroads</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Deck_the_Halls_(2006_film)" title="Deck the Halls (2006 film)">Deck the Halls</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Jack_Frost_(1998_film)" title="Jack Frost (1998 film)">Jack Frost</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Mortal_Kombat_(film)" title="Mortal Kombat (film)">Mortal Kombat</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Double_Team_(film)" title="Double Team (film)">Double Team</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Winter%27s_Tale_(film)" title="Winter's Tale (film)">Winter's Tale</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/No_Holds_Barred_(1989_film)" title="No Holds Barred (1989 film)">No Holds Barred</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Color_of_Night" title="Color of Night">Color of Night</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Ernest_Goes_to_Jail" title="Ernest Goes to Jail">Ernest Goes to Jail</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Easy_Rider:_The_Ride_Back" title="Easy Rider: The Ride Back">Easy Rider: The Ride Back</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Mr._Nanny" title="Mr. Nanny">Mr. Nanny</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Gooby" title="Gooby">Gooby</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Sharknado_2:_The_Second_One" title="Sharknado 2: The Second One">Sharknado 2: The Second One</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Staying_Alive_(1983_film)" title="Staying Alive (1983 film)">Staying Alive</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Glitter_(film)" title="Glitter (film)">Glitter</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Temptation:_Confessions_of_a_Marriage_Counselor" title="Temptation: Confessions of a Marriage Counselor">Temptation: Confessions of a Marriage Counselor</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Monkey_Shines" title="Monkey Shines">Monkey Shines</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Rhinestone_(film)" title="Rhinestone (film)">Rhinestone</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/A_View_to_a_Kill" title="A View to a Kill">A View to a Kill</a></i>"</td>
<td>Live episode. Crossover with the <i>James Bonding</i> podcast<sup id="cite_ref-6" class="reference"><a href="#cite_note-6">[6]</a></sup></td>
</tr>
<tr>
<td>"<i><a href="/wiki/Junior_(1994_film)" title="Junior (1994 film)">Junior</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Xanadu_(film)" title="Xanadu (film)">Xanadu</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Tango_and_Cash" title="Tango and Cash">Tango and Cash</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Zardoz" title="Zardoz">Zardoz</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Zardoz" title="Zardoz">Zardoz</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Safe_Haven_(film)" title="Safe Haven (film)">Safe Haven</a></i>"</td>
<td><small><span title="Not available">N/A</span></small></td>
</tr>
<tr>
<td>"<i><a href="/wiki/Deep_Blue_Sea_(1999_film)" title="Deep Blue Sea (1999 film)">Deep Blue Sea</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Lake_Placid_(film)" title="Lake Placid (film)">Lake Placid</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Con_Air" title="Con Air">Con Air</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Face/Off" title="Face/Off">Face/Off</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Island_of_Dr._Moreau_(1996_film)" title="The Island of Dr. Moreau (1996 film)">The Island of Dr. Moreau</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Hercules_in_New_York" title="Hercules in New York">Hercules in New York</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Jupiter_Ascending" title="Jupiter Ascending">Jupiter Ascending</a></i>"</td>
<td><small><span title="Not available">N/A</span></small></td>
</tr>
<tr>
<td>"<i><a href="/wiki/Runaway_(1984_film)" title="Runaway (1984 film)">Runaway</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Sharknado_3:_Oh_Hell_No!" title="Sharknado 3: Oh Hell No!">Sharknado 3: Oh Hell No!</a>"</i></td>
</tr>
<tr>
<td>"<i><a href="/wiki/Top_Dog_(1995_film)" title="Top Dog (1995 film)">Top Dog</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Theodore_Rex_(film)" title="Theodore Rex (film)">Theodore Rex</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Furious_7" title="Furious 7">Furious 7</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Maximum_Overdrive" title="Maximum Overdrive">Maximum Overdrive</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Masters_of_the_Universe_(film)" title="Masters of the Universe (film)">Masters of the Universe</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Perfect_(film)" title="Perfect (film)">Perfect</a></i>"</td>
</tr>
<tr>
<td>"<i>Death Spa</i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Lifeforce_(film)" title="Lifeforce (film)">Lifeforce</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Hackers_(film)" title="Hackers (film)">Hackers</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Steel_(1997_film)" title="Steel (1997 film)">Steel</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Star_Wars_Holiday_Special" title="Star Wars Holiday Special">Star Wars Holiday Special</a></i>"</td>
<td><small><span title="Not available">N/A</span></small></td>
</tr>
<tr>
<td>"<i><a href="/wiki/Kazaam" title="Kazaam">Kazaam</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Streets_of_Fire" title="Streets of Fire">Streets of Fire</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Apple_(1980_film)" title="The Apple (1980 film)">The Apple</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Teen_Witch" title="Teen Witch">Teen Witch</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Covenant_(film)" title="The Covenant (film)">The Covenant</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Bloodsport_(film)" title="Bloodsport (film)">Bloodsport</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Quest_(film)" title="The Quest (film)">The Quest</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Can%27t_Stop_the_Music" title="Can't Stop the Music">Can't Stop the Music</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Solarbabies" title="Solarbabies">Solarbabies</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Hell_Comes_To_Frogtown" title="Hell Comes To Frogtown">Hell Comes To Frogtown</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"A Conversation with Mel Brooks"</td>
<td>Mel Brooks discusses <i><a href="/wiki/Solarbabies" title="Solarbabies">Solarbabies</a></i></td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Avengers_(1998_film)" title="The Avengers (1998 film)">The Avengers</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Boy_Next_Door_(film)" title="The Boy Next Door (film)">The Boy Next Door</a></i>"</td>
<td><small><span title="Not available">N/A</span></small></td>
</tr>
<tr>
<td>"<i><a href="/wiki/Simply_Irresistible_(film)" title="Simply Irresistible (film)">Simply Irresistible</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Mannequin_Two:_On_the_Move" title="Mannequin Two: On the Move">Mannequin Two: On the Move</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Shadow_(1994_film)" title="The Shadow (1994 film)">The Shadow</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Phantom_(1996_film)" title="The Phantom (1996 film)">The Phantom</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Gods_of_Egypt_(film)" title="Gods of Egypt (film)">Gods of Egypt</a></i>"</td>
<td><small><span title="Not available">N/A</span></small></td>
</tr>
<tr>
<td>"<i><a href="/wiki/Stealth_(film)" title="Stealth (film)">Stealth</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Vampire_Academy_(film)" title="Vampire Academy (film)">Vampire Academy</a></i>"</td>
<td><small><span title="Not available">N/A</span></small></td>
</tr>
<tr>
<td>"<i><a href="/wiki/Dreamcatcher_(2003_film)" title="Dreamcatcher (2003 film)">Dreamcatcher</a></i>"</td>
<td><small><span title="Not available">N/A</span></small></td>
</tr>
<tr>
<td>"<i><a href="/wiki/Gamer_(film)" title="Gamer (film)">Gamer</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Vampire%27s_Kiss" title="Vampire's Kiss">Vampire's Kiss</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Lawnmower_Man_(film)" title="The Lawnmower Man (film)">The Lawnmower Man</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Grease_2" title="Grease 2">Grease 2</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Escape_from_L.A." title="Escape from L.A.">Escape from L.A.</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"Paywall Special Announcement"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Highlander_II:_The_Quickening" title="Highlander II: The Quickening">Highlander II: The Quickening</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Airborne_(1993_film)" title="Airborne (1993 film)">Airborne</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/XXx:_Return_of_Xander_Cage" title="XXx: Return of Xander Cage">xXx: Return of Xander Cage</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Surf_Ninjas" title="Surf Ninjas">Surf Ninjas</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Body_Parts_(film)" title="Body Parts (film)">Body Parts</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Sleepwalkers_(film)" title="Sleepwalkers (film)">Sleepwalkers</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Lake_House_(film)" title="The Lake House (film)">The Lake House</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Fate_of_the_Furious" title="The Fate of the Furious">The Fate of the Furious</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/My_Stepmother_Is_an_Alien" title="My Stepmother Is an Alien">My Stepmother Is an Alien</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Running_Man_(1987_film)" title="The Running Man (1987 film)">The Running Man</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Ninja_Terminator" title="Ninja Terminator">Ninja Terminator</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Timecop" title="Timecop">Timecop</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Hard_Ticket_to_Hawaii" title="Hard Ticket to Hawaii">Hard Ticket to Hawaii</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Garbage_Pail_Kids_Movie" title="The Garbage Pail Kids Movie">The Garbage Pail Kids Movie</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Bratz_(2007_film)" title="Bratz (2007 film)">Bratz</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/The_Last_Dragon" title="The Last Dragon">The Last Dragon</a></i>"</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Virtuosity" title="Virtuosity">Virtuosity</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Jason_X" title="Jason X">Jason X</a></i>"</td>
<td>Live episode</td>
</tr>
<tr>
<td>"<i><a href="/wiki/Ultraviolet_(film)" title="Ultraviolet (film)">Ultraviolet</a></i>"</td>
<td>Live episode</td>
</tr>
</tbody></table>















            </div>
        )
    }
}

function mapStateToProps(state) {
    return { results: state.results }
}

export default connect(mapStateToProps, {fetchPopular, clearMovie})(Home);
