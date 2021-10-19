import React from "react";
import "../styles/Pokecard.css"

const pokeApi = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends React.Component {
    render() {
        const { name, type, base_experience } = this.props.data
        // const imgUrl = `${pokeApi}${this.props.data.id}.png`;
        let newId = padToThree(this.props.data.id)
        const imgUrl = `${pokeApi}${newId}.png`;
        return (
            <div className="pokecard">
                <div className="pokecard-content">
                    <h2>{name}</h2>
                    <img src={imgUrl} alt={name} />
                    <p>Type: {type}</p>
                    <p>EXP: {base_experience}</p>
                </div>
            </div>
        );
    }
}

export default Pokecard;