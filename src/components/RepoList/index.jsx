import React, { useState, useEffect } from 'react';
import styles from './RepoList.module.css';
const RepoList = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/Fryansb/repos')
        .then(res => res.json())
        .then(resJson =>{
            setRepos(resJson);
            console.log(resJson);
        })
    }, []);

    
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {repos.map(({ id, name, language, html_url }) => (
                    <li key={id} className={styles.item}>
                        <span className={styles.name}>Nome:</span> {name} <br />
                        <span className={styles.language}>Linguagem:</span> {language} <br />
                        <a className={styles.link} target="_blank" rel="noopener noreferrer" href={html_url}>Visitar no github</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RepoList;
