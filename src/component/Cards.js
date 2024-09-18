import React, { Component } from 'react'
import Card from './Card'
import Info from './Data'

export default class Cards extends Component {
    constructor() {
        super()
        this.state = { info: Info }
    }
    mapping(x) {
        const members = x.map(member => <div className='col-lg-4 col-md-6 col-sm-12'><Card
            text={member.text}
            icon={member.icon}
            title={member.title}

        />
        </div>

        )
        return members
    }
    render() {

        return (
            <div className="row">
                {this.mapping(this.state.info)}
            </div>
        )
    }
}
