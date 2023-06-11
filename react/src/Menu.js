import { useState } from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import {useNavigate} from "react-router-dom";

const Menu=(props) =>{
    const navigate = useNavigate();

    const [activeIndex, setActiveIndex] = useState(3);
    const items = [
        {label: ' יאללה בואו ניכנס לחשבון  ',  icon: 'pi pi-fw pi-user', command: () => {navigate('/Login') }},
        {label: '    עריכת גמחים לבעל גמח  ',  icon: 'pi pi-fw pi-user', command: () => {navigate('/Manager') }},
        {label: 'דף הבית',  icon: 'pi pi-fw pi-user', command: () => {navigate('/Home') }},
        {label: ' רוצה לדעת עלינו עוד פרטם מדהימים?  ',  icon: 'pi pi-heart-fill', command: () => {navigate('/AboutUs') }},
        {label: ' לרשימת הקטגוריות  ',  icon: 'pi pi-align-justify', command: () => {navigate('/CategoryMenu') }},
        {label: 'מה עוד תמצאו אצלינו',  icon: 'pi pi-instagram', command: () => {navigate('/WhatWillUFindInUs') }},
        {label: '  להימנונים ',  icon: 'pi pi-flag-fill', command: () => {navigate('/WhatWillUFindInUs') }},
        {label: '  לפיצוחים ',  icon: 'pi pi-share-alt', command: () => {navigate('/WhatWillUFindInUs') }},
        {label: '  לקולחי מיוזיק ',  icon: 'pi pi-volume-up', command: () => {navigate('/WhatWillUFindInUs') }},
        {label: '  אוכל בחינם ',  icon: 'pi pi-apple', command: () => {navigate('/WhatWillUFindInUs') }},
        {label: ' להגרלה הגדולה ',  icon: 'pi pi-gift', command: () => {navigate('/WhatWillUFindInUs') }},
        {label: ' קטן',  icon: 'pi pi-heart', command: () => {navigate('/WhatWillUFindInUs') }},



       
    ];

    const func=()=>{
        console.log(activeIndex);
    }
    return (
        <div className="menu">
         <TabMenu onClick={func} model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
        </div>
    )
}
export default Menu;