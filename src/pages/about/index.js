import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/index-about.module.css';
<<<<<<< HEAD
import { groups } from '../../warehouse';
=======
// import {groups} from '../../warehouse.js'
const About = () => {
    // console.log(groups);
    //console.log(groups.forEach(e => {console.log(e.groupName)}));
>>>>>>> de8ef25fbd9b91bd464fc600f028756021f1cc58

const test = groups;

const About = () => {
    console.log(test);
    //console.log(groups.forEach(e => {console.log(e.groupName)}));

    const groups = [
        'Squådis',
        'Chefsgruppen',
        'Dirrarna',
        'Ekonomi',
        'Synk',
        'Kören',
        'Bygg',
        'Dans',
        'Rekvisita',
        'Fotofilm',
        'Kostym',
        'Lyrique',
        'Ljud & ljus',
        'Arr',
        'Orquestern',
        'Manus',
        'Sminq',
        'Grafik',
        'Webb',
        'Spexm',
    ];
    {
        groups.map((groups) => (
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Attributed_to_Jacob_Hoefnagel_-_Gustavus_Adolphus%2C_King_of_Sweden_1611-1632_-_Google_Art_Project.jpg" />
                {groups}
            </div>
        ));
    }

    {
        groups.forEach((e) => {
            console.log(e.groupName);
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/22/Attributed_to_Jacob_Hoefnagel_-_Gustavus_Adolphus%2C_King_of_Sweden_1611-1632_-_Google_Art_Project.jpg"
                    alt="picture of"
                />
                Hej
            </div>;
        });
    }

    return (
        <Layout>
            <div className={styles.indexabout}>
                <h1>Hello</h1>
<<<<<<< HEAD
                {groups.map((groupsName, pictureName) => (
                    <div>
                        <img src={pictureName.pictureName} />
                        {groupsName.groupName}
                    </div>
                ))}
=======
                {/* {groups.map((groupsName, pictureName) => <div><img src={pictureName.pictureName}/>{groupsName.groupName}</div>)} */}
>>>>>>> de8ef25fbd9b91bd464fc600f028756021f1cc58
            </div>
        </Layout>
    );
};

export default About;
