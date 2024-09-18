
import { FaFileAlt } from 'react-icons/fa'; // أيقونة المستند
import { FaCog } from 'react-icons/fa'; // أيقونة العجلة الحديدية
import { FaPen } from 'react-icons/fa'; // أيقونة القلم

const Info =[
    {
        id:1,
        title:"Define CRUD",
        text:"CRUD stands for the four basic operations that can be performed on data: Create: Creating new data Read: Reading existing data Update: Updating current data.Delete: Deleting data.These operations are fundamental for data management in any software application, especially in interactive applications like React.",
        icon:<FaFileAlt className='icon'/>
    },
    {
        id:2,
        title:" The Importance of CRUD in React",
        text:" State Management: It helps organize data and its state within React components.User Interaction: It enables users to input and update data, which increases their engagement with the application.User Experience: It facilitates the creation of dynamic user interfaces that rely on continuous interaction with data.",
        icon:<FaCog className='icon'/>
    },
    {
        id:3,
        title:"Why We Use CRUD in React",
        text:"Building Effective Applications: Most applications need the ability to manage data, making CRUD essential.Integration with APIs: CRUD allows us to communicate with API services to fetch and update data, enhancing the application's effectiveness.Performance Improvement: Using libraries like Redux .",
        icon:<FaPen className='icon'/>
    }
]
export default Info