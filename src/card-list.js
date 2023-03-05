import { LitElement, html, css } from 'lit';

import "pokemon-card-in-open-wc/src/pokemon-card-in-open-wc.js";
import "my-card-dani/src/my-card-dani.js";

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--card-list-background-color);
    }
  `;

  constructor() {
    super();
    this.header = 'Card List';
  }

  render() {
    return html`

      <!--Pokemon Cards-->

      <pokemon-card-in-open-wc name='Charizard'
      imageUrl='https://img2.cgtrader.com/items/4040895/1b0ac08b24/pokemon-charizard-easy-print-no-support-3d-model-stl.jpg'
      topText='CHARIII' bottomText='ZAAARD'
      >
      <p>Charizard is a fire type pokemon</p>
      </pokemon-card-in-open-wc>

      <pokemon-card-in-open-wc name='Pikachu' 
      imageUrl='https://mito3d.fra1.digitaloceanspaces.com/3Dprintmodels/cults/pikachu_pokemon5'
      topText='PIKA' bottomText='PIKA'>
      <p>Pikachu is a thunder type pokemon</p>
      </pokemon-card-in-open-wc>

      <pokemon-card-in-open-wc name='Snorlax' 
      imageUrl='https://i.etsystatic.com/33901625/r/il/d3c51d/4226249756/il_fullxfull.4226249756_6sqb.jpg'
      topText='YAAAWN' bottomText='YAAAWN'>
      <p>Snorlax is a normal type pokemon</p>
      </pokemon-card-in-open-wc>

      <pokemon-card-in-open-wc name='Mew' 
      imageUrl='https://cdn2.myminifactory.com/assets/object-assets/5fe544b1c6d0c/images/720X720-mew-2.jpg'
      topText='MEW' bottomText='NEW'>
      <p>Mew is a phychic type pokemon</p>
      </pokemon-card-in-open-wc>

      <pokemon-card-in-open-wc name='Mewtwo' 
      imageUrl='https://img1.cgtrader.com/items/3182452/bcde20cd24/mewtwo-pokemon-3d-model-bcde20cd24.jpg'
      topText='MEW' bottomText='TWO'>
      <p>Mewtwo is a phychic type pokemon</p>
      </pokemon-card-in-open-wc>

      <!--Hockey Cards-->

      <my-card-dani name='Washington Capitals'
      imageUrl='https://starsandsticks.com/wp-content/uploads/imagn-images/2017/07/16949255.jpeg'
      textbox1='Capitals won the Stanley Cup 1 time'  menuLabel='Team Colors'>
      <p>red & white & blue</p>
      </my-card-dani>

      <my-card-dani name='Pittsburgh Penguins'
      imageUrl='https://cms.nhl.bamgrid.com/images/photos/317714618/1024x576/cut.jpg'
      textbox1='Penguins won the Stanley Cup 5 times'  menuLabel='Team Colors'>
      <p>yellow & black</p>
      </my-card-dani>

      <my-card-dani name='Philadelphia Flyers'
      imageUrl='https://www.visitphilly.com/wp-content/uploads/2018/02/Flyers-players-LenRedkoles-NHL-2200x1237.jpg'
      textbox1='Flyers won the Stanley Cup 2 times'  menuLabel='Team Colors'>
      <p>orange & black</p>
      </my-card-dani>

      <my-card-dani name='New York Rangers'
      imageUrl='https://cms.nhl.bamgrid.com/images/photos/328485222/1024x576/cut.jpg'
      textbox1='Rangers won the Stanley Cup 4 times'  menuLabel='Team Colors'>
      <p>blue & red</p>
      </my-card-dani>

      <my-card-dani name='New York Islanders'
      imageUrl='https://cms.nhl.bamgrid.com/images/photos/317636568/1024x576/cut.jpg'
      textbox1='Islanders won the Stanley Cup 4 times'  menuLabel='Team Colors'>
      <p>blue & orange</p>
      </my-card-dani>
    `;
  }
}

customElements.define('card-list', CardList);