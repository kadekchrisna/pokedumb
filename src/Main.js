
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Root } from "native-base";

import rootStack from './routes';

const AppIndex = createAppContainer(rootStack);

export default class Main extends Component {
    render() {
        return (
            <Root>
                <AppIndex {...this.props} />
            </Root>
        );
    }
}
