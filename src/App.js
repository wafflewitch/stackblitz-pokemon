import React from "react";
import "./style.css";

export default function App() {
  return (
    <section className="showcase">
      <section className="nes-container with-title is-centered">
        <h3 className="title">hello trainer</h3>
        <div className="item">
          <p>choose your pokemon!</p>
          <a onClick={ () => {document.getElementById('dialog-squirtle').showModal();}}><i className="nes-squirtle"></i></a><br />
          <a onClick={ () => {document.getElementById('dialog-charmander').showModal();}}><i className="nes-charmander"></i></a><br />
          <a onClick={ () => {document.getElementById('dialog-bulbasaur').showModal();}}><i className="nes-bulbasaur"></i></a>
        </div>
      </section>

        <dialog class="nes-dialog is-rounded" id="dialog-squirtle">
          <form method="dialog">
            <p class="title">squirtle</p>
            <menu class="dialog-menu">
              <button class="nes-btn is-primary">for real?</button>
            </menu>
          </form>
        </dialog>

        <dialog class="nes-dialog is-rounded" id="dialog-charmander">
          <form method="dialog">
            <p class="title">charmander</p>
            <menu class="dialog-menu">
              <button class="nes-btn is-error">don't be basic.</button>
            </menu>
          </form>
        </dialog>

        <dialog class="nes-dialog is-rounded" id="dialog-bulbasaur">
          <form method="dialog">
            <p class="title">bulbasaur</p>
            <menu class="dialog-menu">
              <button class="nes-btn is-success">yeah buddy!</button>
            </menu>
          </form>
        </dialog>
    </section>
  );
}
