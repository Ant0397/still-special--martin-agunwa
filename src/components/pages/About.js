import React from 'react'
import ContentBlock from '../ContentBlock'
import hero from '../../assets/b90d69_1c81c3e0c0ee49408c5ee2e42ff0ed99_mv2.jpg'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import CV from './CV'

export default function About() {
    const match = useRouteMatch()

    let heroImage = {
        image: hero,
        alt: 'Headshot of Martin Agunwa'
    }

    return (
        <Switch>
            <Route exact path={match.url}>
                <ContentBlock theme="light" media={[heroImage]} mediaPosition="right">
                    <h1 className="content__block__heading">ABOUT</h1>
                    <p><strong>Chukwuemeka Martin Agunwa</strong> is a Public Relations, Branding and Strategic Communications professional with years of cognate experience working with non-profit Non-Government Organisations in Nigeria where he has served as Programmes and Communications Consultant.</p>
                    <p>At Strategic Assembly for Leadership Thrust (SALT) Initiative, he was responsible for organising the Group's periodic town hall meetings aimed at spreading a campaign of positive social value reorientation. At Lifeline where he worked for a cumulative 7-year period, he rose to become the Executive Director and led several road safety awaremess campaigns whilst also responsible for the general administration of the organisation. </p>
                    <p>In 2017, he co-founded <strong>Amara Consults Nigeria Ltd</strong> - a creative communications boutique that offers PR campaign, branding, copywriting, media relations and allied creative communications services to clients.</p>
                    <p>Chukwuemeka is a Humanist, Social Advocate and a lover of art.</p>
                    <p>He holds a Bachelor Degree in Mass Communication from the University of Benin, Nigeria and an MA. Public Relations and Strategic Communications from Leeds Beckett University, Leeds, UK. He is an Associate member of the Nigerian Institute of Public Relations and the Institute of Customer Relationship Management.</p>
                    <Link to={match.url + '/cv'} className="btn btn--primary">Learn More</Link>
                </ContentBlock>
            </Route>
            <Route path={match.url + '/cv'}>
                <CV />
            </Route>
        </Switch>
    )
}