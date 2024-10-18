import React,{useState} from'react'

function Voteing(){
  const [voteCount ,setVoteCount] = useState(0);
  const handleVote = () => {
    setVoteCount(voteCount + 1);
  };
  return (
<div>
<h1>College vote</h1>
  <button onClick = {handleVote}>Vote</button>
  <p>vote count {voteCount}</p>


</div>
  );
}
export default Voteing;
