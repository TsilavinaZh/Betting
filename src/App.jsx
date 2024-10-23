// import { useState } from 'react';
// import { BiShoppingBag, BiX } from "react-icons/bi";
// import HeaderPic from './assets/HardRock.jpg';
// import { BiChevronUp } from "react-icons/bi";

// const Betting = ({ handleSelect }) => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const onBetSelect = (option, odds, name) => {
//     setSelectedOption(option);
//     handleSelect(option, odds, name);
//   };

//   return (
//     <div className="betting-container">
//       <h2>Real Madrid Vs FC Barcelon</h2>
//       <p>International Clubs</p>

//       <div className="bet-options">
//         <div
//           className={`bet-option ${selectedOption === '1' ? 'selected' : ''}`}
//           onClick={() => onBetSelect('1', 3.25, 'Real Madrid')}
//         >
//           <div>1</div>
//           <br />
//           <span>3.25</span>
//         </div>
//         <div
//           className={`bet-option ${selectedOption === 'X' ? 'selected' : ''}`}
//           onClick={() => onBetSelect('X', 2.86, 'Draw')}
//         >
//           <span>X</span>
//           <br />
//           <span>2.86</span>
//         </div>
//         <div
//           className={`bet-option ${selectedOption === '2' ? 'selected' : ''}`}
//           onClick={() => onBetSelect('2', 3.25, 'FC Barcelon')}
//         >
//           <span>2</span>
//           <br />
//           <span>3.25</span>
//         </div>
//       </div>
//       <br />
//     </div>
//   );
// };

// const Card = ({ selectedOption, teamName, cote, wager }) => {
//   const payout = wager * cote; 

//   return (
//     <div className="bodyFroms">
//       <div className="bodyContents">
//         <img src={HeaderPic} alt="Header" />
//         <div className="description">
//           <div className="descriptionLeft">
//             <span>SGP</span>
//             <span className="bet">2-Bet Parlay</span>
//           </div>
//           <div className="descriptionRight">
//             {cote ? cote : 'N/A'}
//           </div>
//         </div>

//         <div className="Details">
//           <p>{teamName ? teamName : 'No team selected'}</p>
//           <p>Real Madrid Vs FC Barcelon</p>
//         </div>

//         <div className="money">
//           <div className="wager">
//             Wager <br />
//             <b className="bigFont">{wager ? `$${wager}` : 'No wager set'}</b>
//           </div>
//           <div className="Paid">
//             Paid <br />
//             <b className="bigFont">{wager && cote ? `$${payout.toFixed(2)}` : 'N/A'}</b>
//           </div>
//         </div>

//         <div className="footerContents">
//           <div className="Uid">
//             ID:1923781083198468726
//           </div>
//           <div className="HidenBtn">
//             Hide
//             <BiChevronUp /> 
//             {/* Si je click ceci il affiche de cacher le className mise */}
//           </div>
//         </div>

//         <div className="Mise">
//           <div className="MiseBody">
//             <div className="MiseCote">
//               <span><BiX /></span>
//               {cote ? `Odds: ${cote}` : 'No odds selected'}
//             </div>
//             <br />
//             <span className="MiseDescriptipn">
//               Selected bet for {teamName}.
//             </span>
//             <p className="MiseNumber">{selectedOption}</p>
//             <div className="MiseCoteLine"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FormsPage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [teamName, setTeamName] = useState('');
//   const [cote, setCote] = useState(null);
//   const [wager, setWager] = useState(1); 

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSelect = (option, odds, name) => {
//     setSelectedOption(option);
//     setCote(odds);
//     setTeamName(name);
//   };

//   return (
//     <div>
//       <Betting handleSelect={handleSelect} />
//       <button onClick={togglePopup} className="popup-button">
//         <BiShoppingBag />
//       </button>
//       {isOpen && (
//         <div className="popup-overlay" onClick={togglePopup}>
//           <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//             <Card
//               selectedOption={selectedOption}
//               teamName={teamName}
//               cote={cote}
//               wager={wager}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <div>
//       <FormsPage />
//     </div>
//   );
// }














// import { useState } from 'react';
// import { BiShoppingBag, BiX, BiChevronUp } from "react-icons/bi";
// import HeaderPic from './assets/HardRock.jpg';
// import { BiSolidCopyAlt } from "react-icons/bi";

// const Betting = ({ handleSelect }) => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const onBetSelect = (option, odds, name) => {
//     setSelectedOption(option);
//     handleSelect(option, odds, name);
//   };

//   return (
//     <div className="betting-container">
//       {/* Ajouter pluieus match ici et je peut mettre un plusieur choix en different match */}
//       <h2>Real Madrid Vs FC Barcelon</h2>
//       <p>International Clubs</p>

//       <div className="bet-options">
//         <div
//           className={`bet-option ${selectedOption === '1' ? 'selected' : ''}`}
//           onClick={() => onBetSelect('1', 3.25, 'Real Madrid')}
//         >
//           <div>1</div>
//           <br />
//           <span>3.25</span>
//         </div>
//         <div
//           className={`bet-option ${selectedOption === 'X' ? 'selected' : ''}`}
//           onClick={() => onBetSelect('X', 2.86, 'Draw')}
//         >
//           <span>X</span>
//           <br />
//           <span>2.86</span>
//         </div>
//         <div
//           className={`bet-option ${selectedOption === '2' ? 'selected' : ''}`}
//           onClick={() => onBetSelect('2', 3.25, 'FC Barcelon')}
//         >
//           <span>2</span>
//           <br />
//           <span>3.25</span>
//         </div>
//       </div>
//       <br />
//     </div>
//   );
// };

// const Card = ({ selectedOption, teamName, cote, wager }) => {
//   const [isMiseVisible, setIsMiseVisible] = useState(true);

//   const payout = wager * cote;

//   const toggleMiseVisibility = () => {
//     setIsMiseVisible(!isMiseVisible);
//   };

//   return (
//     <div className="bodyFroms">
//       <div className="bodyContents">
//         <img src={HeaderPic} alt="Header" />
//         <div className="description">
//           <div className="descriptionLeft">
//             <span>SGP</span>
//             <span className="bet">2-Bet Parlay</span>
//             {/*2-Bet si le numbre de choix est 2 */}

//           </div>
//           <div className="descriptionRight">
//             {cote ? cote : 'N/A'}
//           </div>
//         </div>

//         <div className="Details">
//           <p>{teamName ? teamName : 'No team selected'}</p>
//           <p>Real Madrid Vs FC Barcelon</p>
//         </div>

//         <div className="money">
//           <div className="wager">
//             Wager <br />
//             <b className="bigFont">{wager ? `$${wager}` : 'No wager set'}</b>
//           </div>
//           <div className="Paid">
//             Paid <br />
//             <b className="bigFont">{wager && cote ? `$${payout.toFixed(2)}` : 'N/A'}</b>
//           </div>
//         </div>

//         <div className="footerContents">
//           <div className="Uid">
//             ID:1923781083198468726
//             <button onClick={() => navigator.clipboard.writeText("1923781083198468726")}>
//               <BiSolidCopyAlt />
//             </button>

//           </div>
//           <div className="HidenBtn" onClick={toggleMiseVisibility}>
//             Hide
//             <BiChevronUp />
//           </div>
//         </div>

//         {isMiseVisible && (
//           <div className="Mise">
//             {/* Afficher ici les diffent match */}
//             <div className="MiseBody">
//               <div className="MiseCote">
//                 <span><BiX /></span>
//                 {cote ? `Odds: ${cote}` : 'No odds selected'}
//               </div>
//               <br />
//               <span className="MiseDescriptipn">
//                 Selected bet for {teamName}.
//               </span>
//               <p className="MiseNumber">{selectedOption}</p>
//               <div className="MiseCoteLine"></div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const FormsPage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [teamName, setTeamName] = useState('');
//   const [cote, setCote] = useState(null);
//   const [wager, setWager] = useState(1);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSelect = (option, odds, name) => {
//     setSelectedOption(option);
//     setCote(odds);
//     setTeamName(name);
//   };

//   return (
//     <div>
//       <Betting handleSelect={handleSelect} />
//       <button onClick={togglePopup} className="popup-button">
//         <BiShoppingBag />
//       </button>
//       {isOpen && (
//         <div className="popup-overlay" onClick={togglePopup}>
//           <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//             <Card
//               selectedOption={selectedOption}
//               teamName={teamName}
//               cote={cote}
//               wager={wager}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <div>
//       <FormsPage />
//     </div>
//   );
// }




// import { useState } from 'react';
// import { BiShoppingBag, BiX, BiChevronUp } from "react-icons/bi";
// import HeaderPic from './assets/HardRock.jpg';
// import { BiSolidCopyAlt } from "react-icons/bi";
// import Logo from './Capture.jpg'

// function NavBar() {
//   return (
//     <div className="row align-middle hr-header-wrapper hide-for-small-only">
//       <div className="column small-order-1">
//         <div className="row align-middle logo-and-verticals">
//           <div className="column shrink">
//             <img
//               className="header-logo"
//               src={Logo}
//               alt="HR Logo"
//               data-cy="header-logo"
//             />
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }


// const Betting = ({ matches, handleSelect }) => {
//   const [selectedBets, setSelectedBets] = useState({});

//   const onBetSelect = (matchId, option, odds, name) => {
//     setSelectedBets(prevState => ({
//       ...prevState,
//       [matchId]: { option, odds, name }
//     }));
//     handleSelect(matchId, option, odds, name);
//   };

//   return (
//     <div className="betting-container">
//       {matches.map((match) => (
//         <div key={match.id} className="match">
//           <h2>{match.team1} Vs {match.team2}</h2>
//           <p>{match.competition}</p>

//           <div className="bet-options">
//             <div
//               className={`bet-option ${selectedBets[match.id]?.option === '1' ? 'selected' : ''}`}
//               onClick={() => onBetSelect(match.id, '1', match.odds.team1, match.team1)}
//             >
//               <div>1</div>
//               <br />
//               <span>{match.odds.team1}</span>
//             </div>
//             <div
//               className={`bet-option ${selectedBets[match.id]?.option === 'X' ? 'selected' : ''}`}
//               onClick={() => onBetSelect(match.id, 'X', match.odds.draw, 'Draw')}
//             >
//               <span>X</span>
//               <br />
//               <span>{match.odds.draw}</span>
//             </div>
//             <div
//               className={`bet-option ${selectedBets[match.id]?.option === '2' ? 'selected' : ''}`}
//               onClick={() => onBetSelect(match.id, '2', match.odds.team2, match.team2)}
//             >
//               <span>2</span>
//               <br />
//               <span>{match.odds.team2}</span>
//             </div>
//           </div>
//           <br />
//           <br />
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// const Card = ({ selectedBets, wager }) => {
//   const [isMiseVisible, setIsMiseVisible] = useState(true);

//   const payout = Object.keys(selectedBets).reduce((acc, matchId) => {
//     return acc * (selectedBets[matchId]?.odds || 1);
//   }, wager);

//   const toggleMiseVisibility = () => {
//     setIsMiseVisible(!isMiseVisible);
//   };

//   return (
//     <div className="bodyFroms">
//       <div className="bodyContents">
//         <img src={HeaderPic} alt="Header" />
//         <div className="description">
//           <div className="descriptionLeft">
//             <span>SGP</span>
//             <span className="bet">Multiple Bets</span>
//           </div>
//           <div className="descriptionRight">
//             {Object.keys(selectedBets).length} Bets
//           </div>
//         </div>

//         <div className="Details">
//           {Object.keys(selectedBets).map((matchId) => (
//             <div key={matchId}>
//               <p>{selectedBets[matchId]?.name} - {selectedBets[matchId]?.option}</p>
//             </div>
//           ))}
//         </div>

//         <div className="money">
//           <div className="wager">
//             Wager <br />
//             <b className="bigFont">{wager ? `$${wager}` : 'No wager set'}</b>
//           </div>
//           <div className="Paid">
//             Paid <br />
//             <b className="bigFont">{wager ? `$${payout.toFixed(2)}` : 'N/A'}</b>
//           </div>
//         </div>

//         <div className="footerContents">
//           <div className="Uid">
//             ID:1923781083198468726
//             <button onClick={() => navigator.clipboard.writeText("1923781083198468726")}>
//               <BiSolidCopyAlt />
//             </button>
//           </div>
//           <div className="HidenBtn" onClick={toggleMiseVisibility}>
//             {isMiseVisible ? 'Hide' : 'Show'}
//             <BiChevronUp className='IconsAffiche'/>
//           </div>
//         </div>

//         {isMiseVisible && (
//           <div className="Mise">
//             {Object.keys(selectedBets).map((matchId) => (
//               <div className="MiseBody" key={matchId}>
//                 <div className="MiseCote">
//                   <span><BiX /></span>
//                   Odds: {selectedBets[matchId]?.odds}
//                 </div>
//                 <span className="MiseDescriptipn">
//                   Selected bet for {selectedBets[matchId]?.name}.
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const FormsPage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedBets, setSelectedBets] = useState({});
//   const [wager, setWager] = useState(1);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSelect = (matchId, option, odds, name) => {
//     setSelectedBets((prevBets) => ({
//       ...prevBets,
//       [matchId]: { option, odds, name }
//     }));
//   };

//   const matches = [
//     {
//       id: 1,
//       team1: 'Real Madrid',
//       team2: 'FC Barcelona',
//       competition: 'International Clubs',
//       odds: { team1: 3.25, draw: 2.86, team2: 3.25 },
//     },
//     {
//       id: 2,
//       team1: 'Manchester United',
//       team2: 'Chelsea FC',
//       competition: 'Premier League',
//       odds: { team1: 2.90, draw: 3.10, team2: 3.00 },
//     },
//     {
//       id: 3,
//       team1: 'Bayern ',
//       team2: 'Dortmund',
//       competition: 'Bundesliga',
//       odds: { team1: 1.80, draw: 3.50, team2: 4.00 },
//     },
//   ];


//   return (
//     <div>
//       <Betting matches={matches} handleSelect={handleSelect} />
//       <button onClick={togglePopup} className="popup-button">
//         <BiShoppingBag />
//       </button>
//       {isOpen && (
//         <div className="popup-overlay" onClick={togglePopup}>
//           <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//             <Card
//               selectedBets={selectedBets}
//               wager={wager}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Main App component
// export default function App() {
//   return (
//     <div>
//       <NavBar />
//       <FormsPage />
//     </div>
//   );
// }











// import { useState } from 'react';
// import { BiShoppingBag, BiX, BiChevronUp } from "react-icons/bi";
// import HeaderPic from './assets/HardRock.jpg';
// import { BiSolidCopyAlt } from "react-icons/bi";
// import Logo from './Capture.jpg';
// import { BiMoney } from "react-icons/bi";

// function NavBar() {
//   return (
//     <div className="row align-middle hr-header-wrapper hide-for-small-only navbar">
//       <div className="column small-order-1">
//         <div className="row align-middle logo-and-verticals gg">
//           <div className="column shrink">
//             <img
//               className="header-logo"
//               src={Logo}
//               alt="HR Logo"
//               data-cy="header-logo"
//             />
//           </div>
//           <div className="solde">
//             <BiMoney />300
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const Betting = ({ matches, handleSelect }) => {
//   const [selectedBets, setSelectedBets] = useState({});

//   const onBetSelect = (matchId, option, odds, name) => {
//     setSelectedBets((prevState) => {
//       if (prevState[matchId]) {
//         // Si le pari est déjà sélectionné, le supprimer
//         const newState = { ...prevState };
//         delete newState[matchId];
//         handleSelect(matchId, null, null, null); // Appeler handleSelect avec nulls pour désélectionner
//         return newState;
//       } else {
//         // Sinon, le sélectionner
//         const newState = {
//           ...prevState,
//           [matchId]: { option, odds, name }
//         };
//         handleSelect(matchId, option, odds, name);
//         return newState;
//       }
//     });
//   };

//   return (
//     <div className="betting-container">
//       {matches.map((match) => (
//         <div key={match.id} className="match">
//           <h2>{match.team1} Vs {match.team2}</h2>
//           <p>{match.competition}</p>

//           <div className="bet-options">
//             <div
//               className={`bet-option ${selectedBets[match.id]?.option === '1' ? 'selected' : ''}`}
//               onClick={() => onBetSelect(match.id, '1', match.odds.team1, match.team1)}
//             >
//               <div>1</div>
//               <br />
//               <span>{match.odds.team1}</span>
//             </div>
//             <div
//               className={`bet-option ${selectedBets[match.id]?.option === 'X' ? 'selected' : ''}`}
//               onClick={() => onBetSelect(match.id, 'X', match.odds.draw, 'Draw')}
//             >
//               <span>X</span>
//               <br />
//               <span>{match.odds.draw}</span>
//             </div>
//             <div
//               className={`bet-option ${selectedBets[match.id]?.option === '2' ? 'selected' : ''}`}
//               onClick={() => onBetSelect(match.id, '2', match.odds.team2, match.team2)}
//             >
//               <span>2</span>
//               <br />
//               <span>{match.odds.team2}</span>
//             </div>
//           </div>
//           <br />
//           <br />
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// const Card = ({ selectedBets, wager }) => {
//   const [isMiseVisible, setIsMiseVisible] = useState(true);

//   const payout = Object.keys(selectedBets).reduce((acc, matchId) => {
//     return acc * (selectedBets[matchId]?.odds || 1);
//   }, wager);

//   const toggleMiseVisibility = () => {
//     setIsMiseVisible(!isMiseVisible);
//   };

//   return (
//     <div className="bodyFroms">
//       <div className="bodyContents">
//         <img src={HeaderPic} alt="Header" />
//         <div className="description">
//           <div className="descriptionLeft">
//             <span>SGP</span>
//             <span className="bet">Multiple Bets</span>
//           </div>
//           <div className="descriptionRight">
//             {Object.keys(selectedBets).length} Bets
//           </div>
//         </div>

//         <div className="Details">
//           {Object.keys(selectedBets).map((matchId) => (
//             <div key={matchId}>
//               <p>{selectedBets[matchId]?.name} - {selectedBets[matchId]?.option}</p>
//             </div>
//           ))}
//         </div>

//         <div className="money">
//           <div className="wager">
//             Wager <br />
//             <b className="bigFont">{wager ? `$${wager}` : 'No wager set'}</b>
//           </div>
//           <div className="Paid">
//             Paid <br />
//             <b className="bigFont">{wager ? `$${payout.toFixed(2)}` : 'N/A'}</b>
//           </div>
//         </div>

//         <div className="footerContents">
//           <div className="Uid">
//             ID:1923781083198468726
//             <button onClick={() => navigator.clipboard.writeText("1923781083198468726")}>
//               <BiSolidCopyAlt />
//             </button>
//           </div>
//           <div className="HidenBtn" onClick={toggleMiseVisibility}>
//             {isMiseVisible ? 'Hide' : 'Show'}
//             <BiChevronUp className='IconsAffiche' />
//           </div>
//         </div>

//         {isMiseVisible && (
//           <div className="Mise">
//             {Object.keys(selectedBets).map((matchId) => (
//               <div className="MiseBody" key={matchId}>
//                 <div className="MiseCote">
//                   <span><BiX /></span>
//                   Odds: {selectedBets[matchId]?.odds}
//                 </div>
//                 <span className="MiseDescriptipn">
//                   Selected bet for {selectedBets[matchId]?.name}.
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const FormsPage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedBets, setSelectedBets] = useState({});
//   const [wager, setWager] = useState(1);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSelect = (matchId, option, odds, name) => {
//     setSelectedBets((prevBets) => {
//       if (option === null) {
//         const newBets = { ...prevBets };
//         delete newBets[matchId];
//         return newBets;
//       }
//       return {
//         ...prevBets,
//         [matchId]: { option, odds, name }
//       };
//     });
//   };

//   const matches = [
//     {
//       id: 1,
//       team1: 'Real Madrid',
//       team2: 'FC Barcelona',
//       competition: 'International Clubs',
//       odds: { team1: 3.25, draw: 2.86, team2: 3.25 },
//     },
//     {
//       id: 2,
//       team1: 'M United',
//       team2: 'Chelsea FC',
//       competition: 'Premier League',
//       odds: { team1: 2.90, draw: 3.10, team2: 3.00 },
//     },
//     {
//       id: 3,
//       team1: 'Bayern Munich',
//       team2: 'Borussia Dortmund',
//       competition: 'Bundesliga',
//       odds: { team1: 1.80, draw: 3.50, team2: 4.00 },
//     },
//   ];

//   return (
//     <div>
//       <Betting matches={matches} handleSelect={handleSelect} />
//       <button onClick={togglePopup} className="popup-button">
//         <BiShoppingBag />
//       </button>
//       {isOpen && (
//         <div className="popup-overlay" onClick={togglePopup}>
//           <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//             <Card
//               selectedBets={selectedBets}
//               wager={wager}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <div>
//       <NavBar />
//       <FormsPage />
//     </div>
//   );
// }

import { useState } from 'react';
import { BiShoppingBag, BiX, BiChevronUp } from "react-icons/bi";
import HeaderPic from './assets/HardRock.jpg';
import { BiSolidCopyAlt } from "react-icons/bi";
import Logo from './Capture.jpg';
import { BiMoney } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importer les styles de toastify

function NavBar() {
  return (
    <div className="row align-middle hr-header-wrapper hide-for-small-only navbar">
      <div className="column small-order-1">
        <div className="row align-middle logo-and-verticals gg">
          <div className="column shrink">
            <img
              className="header-logo"
              src={Logo}
              alt="HR Logo"
              data-cy="header-logo"
            />
          </div>
          <div className="solde">
            <BiMoney />300
          </div>
        </div>
      </div>
    </div>
  );
}

const Betting = ({ matches, handleSelect }) => {
  const [selectedBets, setSelectedBets] = useState({});

  const onBetSelect = (matchId, option, odds, name) => {
    setSelectedBets((prevState) => {
      if (prevState[matchId]) {
        const newState = { ...prevState };
        delete newState[matchId];
        handleSelect(matchId, null, null, null); // Appeler handleSelect avec nulls pour désélectionner
        return newState;
      } else {
        const newState = {
          ...prevState,
          [matchId]: { option, odds, name }
        };
        handleSelect(matchId, option, odds, name);
        return newState;
      }
    });
  };

  return (
    <div className="betting-container">
      {matches.map((match) => (
        <div key={match.id} className="match">
          <h2>{match.team1} Vs {match.team2}</h2>
          <p>{match.competition}</p>

          <div className="bet-options">
            <div
              className={`bet-option ${selectedBets[match.id]?.option === '1' ? 'selected' : ''}`}
              onClick={() => onBetSelect(match.id, '1', match.odds.team1, match.team1)}
            >
              <div>1</div>
              <br />
              <span>{match.odds.team1}</span>
            </div>
            <div
              className={`bet-option ${selectedBets[match.id]?.option === 'X' ? 'selected' : ''}`}
              onClick={() => onBetSelect(match.id, 'X', match.odds.draw, 'Draw')}
            >
              <span>X</span>
              <br />
              <span>{match.odds.draw}</span>
            </div>
            <div
              className={`bet-option ${selectedBets[match.id]?.option === '2' ? 'selected' : ''}`}
              onClick={() => onBetSelect(match.id, '2', match.odds.team2, match.team2)}
            >
              <span>2</span>
              <br />
              <span>{match.odds.team2}</span>
            </div>
          </div>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
};

const Card = ({ selectedBets, wager }) => {
  const [isMiseVisible, setIsMiseVisible] = useState(true);

  const payout = Object.keys(selectedBets).reduce((acc, matchId) => {
    return acc * (selectedBets[matchId]?.odds || 1);
  }, wager);

  const toggleMiseVisibility = () => {
    setIsMiseVisible(!isMiseVisible);
  };

  return (
    <div className="bodyFroms">
      <div className="bodyContents">
        <img src={HeaderPic} alt="Header" />
        <div className="description">
          <div className="descriptionLeft">
            <span>SGP</span>
            <span className="bet">Multiple Bets</span>
          </div>
          <div className="descriptionRight">
            {Object.keys(selectedBets).length} Bets
          </div>
        </div>

        <div className="Details">
          {Object.keys(selectedBets).map((matchId) => (
            <div key={matchId}>
              <p>{selectedBets[matchId]?.name} - {selectedBets[matchId]?.option}</p>
            </div>
          ))}
        </div>

        <div className="money">
          <div className="wager">
            Wager <br />
            <b className="bigFont">{wager ? `$${wager}` : 'No wager set'}</b>
          </div>
          <div className="Paid">
            Paid <br />
            <b className="bigFont">{wager ? `$${payout.toFixed(2)}` : 'N/A'}</b>
          </div>
        </div>

        <div className="footerContents">
          <div className="Uid">
            ID:1923781083198468726
            <button 
              onClick={() => {
                navigator.clipboard.writeText("1923781083198468726");
                toast.success("ID copiée dans le presse-papiers !"); // Afficher un toast de succès
              }}
            >
              <BiSolidCopyAlt />
            </button>
          </div>
          <div className="HidenBtn" onClick={toggleMiseVisibility}>
            {isMiseVisible ? 'Hide' : 'Show'}
            <BiChevronUp className='IconsAffiche' />
          </div>
        </div>

        {isMiseVisible && (
          <div className="Mise">
            {Object.keys(selectedBets).map((matchId) => (
              <div className="MiseBody" key={matchId}>
                <div className="MiseCote">
                  <span><BiX /></span>
                  Odds: {selectedBets[matchId]?.odds}
                </div>
                <span className="MiseDescriptipn">
                  Selected bet for {selectedBets[matchId]?.name}.
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const FormsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBets, setSelectedBets] = useState({});
  const [wager, setWager] = useState(1);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (matchId, option, odds, name) => {
    setSelectedBets((prevBets) => {
      if (option === null) {
        const newBets = { ...prevBets };
        delete newBets[matchId];
        return newBets;
      }
      return {
        ...prevBets,
        [matchId]: { option, odds, name }
      };
    });
  };

  const matches = [
    {
      id: 1,
      team1: 'Real Madrid',
      team2: 'FC Barcelona',
      competition: 'International Clubs',
      odds: { team1: 3.25, draw: 2.86, team2: 3.25 },
    },
    {
      id: 2,
      team1: 'M United',
      team2: 'Chelsea FC',
      competition: 'Premier League',
      odds: { team1: 2.90, draw: 3.10, team2: 3.00 },
    },
    {
      id: 3,
      team1: 'Bayern Munich',
      team2: 'Borussia Dortmund',
      competition: 'Bundesliga',
      odds: { team1: 1.80, draw: 3.50, team2: 4.00 },
    },
  ];

  return (
    <div>
      <Betting matches={matches} handleSelect={handleSelect} />
      <button onClick={togglePopup} className="popup-button">
        <BiShoppingBag />
      </button>
      {isOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <Card
              selectedBets={selectedBets}
              wager={wager}
            />
          </div>
        </div>
      )}
      <ToastContainer /> {/* Ajouter le conteneur de toast ici */}
    </div>
  );
};

export default FormsPage;
