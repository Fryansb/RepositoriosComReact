import { useState, useEffect } from "react";
import styles from './Fomulario.module.css';

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        
        console.log("O componente iniciou");
        return () => {
            console.log("O componente finalizou");
        };
    }, []);

    useEffect(() => {
        console.log("Nome alterado para: " + nome);
    }, [nome]);

    useEffect(() => {
        console.log("Materias alteradas:", materiaA, materiaB, materiaC);
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (evento) => {
        setNome(evento.target.value);
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;


        return (
            <div>
                {media >= 7 ? (
                    <p>Olá {nome}, você foi aprovado!</p>
                ) : (
                    <p>Olá {nome}, você foi reprovado!</p>
                )}
                <p>Sua média foi {media.toFixed(2)}</p>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <ul className={styles.list}>
                    {[1,2,3,4,5].map(item => (
                        <li key={item} className={styles.item}>{item}</li>
                    ))}
                </ul>
                <input className={styles.input} type="text" placeholder="Nome do aluno" onChange={alteraNome} />
                <input className={styles.input} type="number" placeholder="Nota materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
                <input className={styles.input} type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
                <input className={styles.input} type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
                <div className={styles.text}>{renderizaResultado()}</div>
            </form>
        </div>
    )
}

export default Formulario;