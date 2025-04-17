'use client';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkAuth } from '@/redux/slices/authSlice';
import Loader from './shared/Loader';

const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const { user, loading } = useSelector((state) => state.auth);

    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        if (!user?.userId) {
            const check = async () => {
                await dispatch(checkAuth());
                setAuthChecked(true);
            };
            check();
        } else {
            setAuthChecked(true);
        }
    }, [dispatch, user]);

    useEffect(() => {
        if (authChecked && !loading && !user?.userId) {
            router.push('/login');
        }
    }, [authChecked, loading, user, router]);

    if (!authChecked || loading) {
        return <Loader />;
    }

    return children;
};

export default ProtectedRoute;
