import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setAppState } from '~/redux/features/appStateSlice';

function PageWrapperAdmin(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        if(props.state) {
            dispatch(setAppState(props.state))
        }
    }, [dispatch, props])
    return (
        <>{props.children}</>
    );
}

export default PageWrapperAdmin;