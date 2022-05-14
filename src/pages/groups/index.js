import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/index-about.module.css';
import Arr from '../../../assets/images/group/Arr.png';
import Skadis from '../../../assets/images/group/skådis.png';
import Chefer from '../../../assets/images/group/Chefsgrupp-Tot.png';
import Direqtionen from '../../../assets/images/group/Direqtionen.png';
import Missing from '../../../assets/images/group/missing.png';
import Koren from '../../../assets/images/group/koren.png';
import Bygg from '../../../assets/images/group/bygg.png';
import Dans from '../../../assets/images/group/dans.png';
import Requisita from '../../../assets/images/group/requisita.png';
import Fotofilm from '../../../assets/images/group/fotofilm.png';
import Kostym from '../../../assets/images/group/kostym.png';
import Lyrique from '../../../assets/images/group/lyrique.png';
import Lol from '../../../assets/images/group/LOL.png';
import Orqester from '../../../assets/images/group/Orqester.png';
import Manus from '../../../assets/images/group/manus.png';
import Smink from '../../../assets/images/group/Smink_Hår.png';
import Grafik from '../../../assets/images/group/grafik.png';
import Webb from '../../../assets/images/group/webb.png';
import Spexm from '../../../assets/images/group/spexm.png';

const chefer = {
    groupName: 'Chefsgruppen',
    pictureName: Chefer,
};

const groups = [
    { groupName: 'Arr', pictureName: Arr },
    { groupName: 'Squådis', pictureName: Skadis },

    { groupName: 'Dirrarna', pictureName: Direqtionen },
    { groupName: 'Ekonomi', pictureName: Missing },
    { groupName: 'Synk', pictureName: Missing },
    { groupName: 'Kören', pictureName: Koren },
    { groupName: 'Bygg', pictureName: Bygg },
    { groupName: 'Dans', pictureName: Dans },
    { groupName: 'Requisita', pictureName: Requisita },
    { groupName: 'Fotofilm', pictureName: Fotofilm },
    { groupName: 'Kostym', pictureName: Kostym },
    { groupName: 'Lyrique', pictureName: Lyrique },
    { groupName: 'Ljud & ljus', pictureName: Lol },
    { groupName: 'Orquestern', pictureName: Orqester },
    { groupName: 'Manus', pictureName: Manus },
    { groupName: 'Sminq', pictureName: Smink },
    { groupName: 'Grafik', pictureName: Grafik },
    { groupName: 'Webb', pictureName: Webb },
    { groupName: 'Spexm', pictureName: Spexm },
];

const Groups = () => {
    return (
        <Layout>
            <div className={styles.cardCenter}>
                <img src={chefer.pictureName} alt="" />
                <h1>{chefer.groupName}</h1>
            </div>

            <div className={styles.indexabout}>
                {groups.map((group) => (
                    <div>
                        <img src={group.pictureName} alt={group.groupName} />
                        <h1>{group.groupName}</h1>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Groups;
