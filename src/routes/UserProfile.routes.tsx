import ProtectedRoute from '../components/auth/ProtectedRoute';
import UserDetails from '../pages/userProfile/UserDetails'
import UserEdit from '../pages/userProfile/UserEdit'
const UserProfileRoutes = [
    {path:'/user-edit', element:<UserEdit/>},
    {path:'/user-details', element:
    <ProtectedRoute>
        <UserDetails/>
    </ProtectedRoute>
},
];
export default UserProfileRoutes