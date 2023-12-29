import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';

export default function Main() {
    return (
        <div className='py-4'>
            <Link to={ROUTES.VENDORS}>
                <p className='text-title color-gray-dark align-center'>
                    Go to Vendors Page
                </p>
            </Link>
        </div>
    );
}
