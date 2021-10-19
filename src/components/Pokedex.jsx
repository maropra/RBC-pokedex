import React from "react";
import Pokecard from "./Pokecard";
import "../styles/Pokedex.css"

class Pokedex extends React.Component {
    render() {
        const pokemonComponents = this.props.pokemon.map(pokemon => <Pokecard key={pokemon.id} data={pokemon} />)

        return (
            <div className="pokedex">
                <h1>Pokedex</h1>
                <p>Total Experience: {this.props.exp}</p>
                <p style={{ color: this.props.isWinner ? 'green' : 'red' }}>You {this.props.isWinner ? "win" : "loose"}!</p>
                <div className="pokedex-cards">
                    {pokemonComponents}
                </div>
            </div>
        );
    }
}

export default Pokedex;