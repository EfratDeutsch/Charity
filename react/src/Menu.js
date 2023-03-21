import { useState } from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import {useNavigate} from "react-router-dom";

const Menu=(props) =>{
    const navigate = useNavigate();

    const [activeIndex, setActiveIndex] = useState(3);
    const items = [
        {label: ' יאללה בואו ניכנס לחשבון  ',  icon: 'pi pi-fw pi-user', command: () => {navigate('/Login') }},
        {label: ' רוצה לדעת עלינו עוד פרטם מדהימים?  ',  icon: 'pi pi-heart-fill', command: () => {navigate('/AboutUs') }},
        {label: ' לרשימת הקטגוריות  ',  icon: 'pi pi-align-justify', command: () => {navigate('/CategoryMenu') }},
        {label: '  חשבון האינסטגרם שלנו  ',  icon: 'pi pi-instagram', command: () => {navigate('/Instegram') }},
     
        

       
    ];

    const func=()=>{
        console.log(activeIndex);
    }
    return (
        <div className="card">
         <TabMenu onClick={func} model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
        </div>
    )
}
export default Menu;