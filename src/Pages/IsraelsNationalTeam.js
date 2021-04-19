import React from 'react';
import FCFooter from '../FunctionalComponent/FCFooter';



const IsraelsNationalTeam = () => {
    return (
        <div className="IsraelsNationalTeamPage">
            <h1>על הנבחרת</h1>
            <p>נבחרת ישראל בגיימינג תחרותי היא הנבחרת הלאומית של ישראל לאליפות העולם בספורט אלקטרוני של הפדרציה הבינ"ל לספורט אלקטרוני. האליפות העולמית מתקיימת על בסיס שנתי בערים ומדינות שונות. </p>
            <h1>נבחרות ישראל לאורך השנים</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>דירוג</th>
                        <th>מדינה מארחת</th>
                        <th>שנה</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>14/26</td>
                        <td>ד. קוריאה</td>
                        <td>2010</td>
                    </tr>
                    <tr>
                        <td>8/26</td>
                        <td>ד. קוריאה</td>
                        <td>2011</td>
                    </tr>
                    <tr>
                        <td>11/34</td>
                        <td>ד. קוריאה</td>
                        <td>2012</td>
                    </tr>
                    <tr>
                        <td>13/26</td>
                        <td>רומניה</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>20/24</td>
                        <td>אייזרבייג'ן</td>
                        <td>2014</td>
                    </tr>
                    <tr>
                        <td>11/34</td>
                        <td>ד. קוריאה</td>
                        <td>2015</td>
                    </tr>

                    <tr>
                        <td>11/23</td>
                        <td>ד. קוריאה</td>
                        <td>2017</td>
                    </tr>
                    <tr>
                        <td>11/37</td>
                        <td>טאיוואן</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>ד. קוריאה</td>
                        <td>2019</td>
                    </tr>
                </tbody>
            </table>
            <FCFooter></FCFooter>
        </div>
    );
}
export default IsraelsNationalTeam;