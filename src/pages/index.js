import React, { useState } from 'react';
import style from '../styles/Home.module.css';

export default function Home() {
  const [bgColor, setColor] = useState('red');

  const changeBlue = () => {
    setColor('blue');
  };

  const changePurple = () => {
    setColor('purple');
  };
  
  const changeGreen = () => {
    setColor("green");
  };

  const changeRed = () => {
    setColor('red');
  };
  

  return (
    <main className={style.main_container}>
      <h1>Hook useState</h1>
      <section>
        <div className={style.explanation_container}>
          <h2>O que é useState?</h2>
          <div class={style.text_container}>
            <p>O useState é um hook que permite adicionar estado a componentes funcionais. Ele é uma das formas de adicionar estado a componentes funcionais no React.</p>
            <p>Código do exemplo:</p>
          </div>
          <pre>
            <code>{`
            import React, { useState } from 'react';

            export default function Home() {
              const [bgColor, setColor] = useState('red');
            
              const changeBlue = () => {
                setColor('blue');
              };
            
              const changePurple = () => {
                setColor('purple');
              };
              
              const changeGreen = () => {
                setColor("green");
              };

              const changeRed = () => {
                setColor('red');
              };
              
            
              return (
                <main>
                  
                  <center>
                    <br />
                    <h1>Hook useState</h1>
                    <br />
                        <div className="quadrado" 
                        style={{ 
                          backgroundColor: bgColor, 
                          width: "400px", 
                          height: "200px"}}>
                          <p 
                            style={{color: "white"}}>
                              Cor de fundo alterada com useState
                          </p>
                        </div>
                        <br />
                        <div>
                          <button onClick={changeBlue}>Azul</button>
                          <button onClick={changePurple}>Roxo</button>
                          <button onClick={changeGreen}>Verde</button>
                          <button onClick={changeRed}>Vermelho</button>
                        </div>
                  </center>
                </main>
              );
            }
              `}
            </code>
          </pre>
        </div>

        <div className={style.content_container}>
          <div class={style.text_container}>
            <h2>Exemplo prático</h2>
            <p>Clique nos botões para alterar a cor de fundo do quadrado.</p>
          </div>
          <div class={style.content}>
            <div className={style.square} style={{ backgroundColor: bgColor}}>
              <p style={{color: "white"}}>Cor de fundo alterada.</p>
            </div>
            <div className={style.btn_container}>
              <button onClick={changeBlue}>Azul</button>
              <button onClick={changePurple}>Roxo</button>
              <button onClick={changeGreen}>Verde</button>
              <button onClick={changeRed}>Vermelho</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

