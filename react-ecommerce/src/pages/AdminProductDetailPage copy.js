import AdminProductDetails from "../features/admin/components/AdminProductDetails";
import Navbar from "../features/navbar/Navbar";

function AdminProductDetailPage() {
    return (
        <div>
            <Navbar>
                <AdminProductDetails></AdminProductDetails>
            </Navbar>
        </div>
    );
}

export default AdminProductDetailPage;