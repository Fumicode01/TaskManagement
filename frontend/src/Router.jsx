import React from 'react'
import { Switch, Route} from 'react-router'
import Auth from './Auth'

const Router = () => {
    return (
            <Switch>
                <Auth>
                 </Auth>
            </Switch>
    )
}

export default Router