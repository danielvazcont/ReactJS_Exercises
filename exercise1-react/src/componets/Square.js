import "../css/square.css";

function Square(props){
  return(
    <div className="container-square">
      <img className="img-square" src={require(`../img/testimonio-${props.img}.png`)} alt={props.name} />
      <div className="text-square">
        <p className="name-u"><strong>{props.name}</strong> from {props.country}</p>
        <p className="position-u">{props.position} of <strong>{props.company}</strong></p>
        <p className="text-u">"{props.text}"</p>
      </div>
    </div>
  );
}

export default Square;