import {Card, CardBody, CardTitle} from "reactstrap";
import React from "react";

const CardHowToUse = ({type}) => {
    switch (type) {
        case 'test':
            return <Card>
                <CardBody>
                    <CardTitle>How to backtest</CardTitle>
                    <ol>
                        <li>bla blah blah</li>
                        <li>bla blah blah</li>
                        <li>bla blah blah</li>
                        <li>bla blah blah</li>
                        <li>bla blah blah</li>
                    </ol>
                </CardBody>
            </Card>
        case 'result':
            return  <Card>
                <CardBody>
                    <CardTitle>How to read Backtest Results</CardTitle>
                    <ol>
                        <li>bla blah blah</li>
                        <li>bla blah blah</li>
                        <li>bla blah blah</li>
                        <li>bla blah blah</li>
                        <li>bla blah blah</li>
                    </ol>
                </CardBody>
            </Card>
    }
}

export default CardHowToUse