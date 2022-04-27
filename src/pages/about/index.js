import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/index-about.module.css';
import bild from '../../../assets/images/past-banners/2019-banner.jpg';

const groupImages = new Array();
for (let index = 0; index < 20; index++) {
    groupImages[index] = new Image();
}
groupImages[0] = '../../../assets/images/group/Arr.png';
groupImages[1] = '../../../assets/images/group/Chefsgrupp-Tot.png';
groupImages[2] = '../../../assets/images/group/Direqtionen.png';
groupImages[3] = '../../../assets/images/group/missing.png';
groupImages[4] = '../../../assets/images/group/missing.png';
groupImages[5] = '../../../assets/images/group/koren.png';
groupImages[6] = '../../../assets/images/group/bygg.png';
groupImages[7] = '../../../assets/images/group/dans.png';
groupImages[8] = '../../../assets/images/group/requisita.png';
groupImages[9] = '../../../assets/images/group/fotofilm.png';
groupImages[10] = '../../../assets/images/group/kostym.png';
groupImages[11] = '../../../assets/images/group/lyrique.png';
groupImages[12] = '../../../assets/images/group/LOL.png';
groupImages[13] = '../../../assets/images/group/Arr.png';
groupImages[14] = '../../../assets/images/group/Orqester.png';
groupImages[15] = '../../../assets/images/group/manus.png';
groupImages[16] = '../../../assets/images/group/Smink_Hår.png';
groupImages[17] = '../../../assets/images/group/grafik.png';
groupImages[18] = '../../../assets/images/group/webb.png';
groupImages[19] = '../../../assets/images/group/spexm.png';

const groups = [
    { groupName: 'Squådis', pictureName: groupImages[0] },
    { groupName: 'Chefsgruppen', pictureName: groupImages[1] },
    { groupName: 'Dirrarna', pictureName: groupImages[2] },
    { groupName: 'Ekonomi', pictureName: groupImages[3] },
    { groupName: 'Synk', pictureName: groupImages[4] },
    { groupName: 'Kören', pictureName: groupImages[5] },
    { groupName: 'Bygg', pictureName: groupImages[6] },
    { groupName: 'Dans', pictureName: groupImages[7] },
    { groupName: 'Requisita', pictureName: groupImages[8] },
    { groupName: 'Fotofilm', pictureName: groupImages[9] },
    { groupName: 'Kostym', pictureName: groupImages[10] },
    { groupName: 'Lyrique', pictureName: groupImages[11] },
    { groupName: 'Ljud & ljus', pictureName: groupImages[12] },
    { groupName: 'Arr', pictureName: groupImages[13] },
    { groupName: 'Orquestern', pictureName: groupImages[14] },
    { groupName: 'Manus', pictureName: groupImages[15] },
    { groupName: 'Sminq', pictureName: groupImages[16] },
    { groupName: 'Grafik', pictureName: groupImages[17] },
    { groupName: 'Webb', pictureName: groupImages[18] },
    { groupName: 'Spexm', pictureName: groupImages[19] },
];

const testArr = [
    { a: 'test1', b: 'path1' },
    { a: 'test2', b: 'path2' },
];

console.log(testArr);
const About = () => {
    return (
        <Layout>
            <div className={styles.indexabout}>
                <h1>Hello</h1>
                {groups.map((groupsName, pictureName) => (
                    <div>
                        <img src={pictureName.pictureName} />
                        {groupsName.groupName}
                    </div>
                ))}
                {/* {groups.map((groupsName, pictureName) => <div><img src={pictureName.pictureName}/>{groupsName.groupName}</div>)} */}
            </div>
        </Layout>
    );
};

export default About;
