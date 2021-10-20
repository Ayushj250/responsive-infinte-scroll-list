import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { debounce } from 'lodash';

import * as paths from '../constants/paths';
import { toStringJson } from '../utils';
import { load, toggleLogin } from '../store/actions/userLogin';
import Skeleton from '../components/ContactCard/Skeleton';
import Card from '../components/ContactCard/Card';

import './HomePage.css';

function HomePage(props) {
    const [contactCards, setContactCards] = useState([]);
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(false);

    const userLogin = useSelector(state => state.userLogin);

    const dispatchAction = useDispatch();

    useEffect(() => {
        dispatchAction(load());
    }, [dispatchAction]);

    useEffect(() => {
        if (!userLogin.isLoggedIn) {
            props.history.push(paths.LOGIN);
        }
    }, [userLogin, props]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            axios({
                method: 'GET',
                url: 'https://randomuser.me/api/?results=50',
            }).then(resp => {
                setContactCards(prev => [
                    ...prev,
                    ...resp.data.results.map(user => ({
                        id: user.id.value,
                        name: toStringJson(user.name),
                        thumbnail: user.picture.thumbnail
                    }))
                ]);
                setLoading(false);
            });
        }, 1000);
    }, [count]);

    const getSkeleton = () => {
        return (
            <>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(x => <Skeleton key={x} />)}
            </>
        )
    };

    const getCards = () => {
        return contactCards.map(contactCard => <Card
            name={contactCard.name}
            img={contactCard.thumbnail}
            key={`${contactCard.id}${contactCard.name}`}
        />);
    };

    const handleOnClick = (e) => {
        dispatchAction(toggleLogin());
    }
    const handleScroll = (e) => {
        if (e.target.scrollHeight - e.target.clientHeight === e.target.scrollTop) {
            setCount(prev => prev + 1);
        }
    };

    return (
        <div className="contactCardContainer" onScroll={debounce(handleScroll, 200)}>
            <button className="btn btn-pos" onClick={handleOnClick}>Log Out</button>
            <div className="cards">
                {getCards()}
                {loading && getSkeleton()}
            </div>
        </div>
    )
}

export default withRouter(HomePage);
