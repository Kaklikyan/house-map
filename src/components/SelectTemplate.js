import React from 'react';
import { connect } from 'react-redux';

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { fetchTemplates, changeActiveTemplate } from '../actions/templateActions';

class SelectTemplate extends React.Component {
    componentDidMount() {
        this.props.fetchTemplates();
    }

    handleChange = template =>  this.props.changeActiveTemplate(template);

    render() {
        const { templates, activeTemplate } = this.props;
        return (
            <UncontrolledDropdown className="my-3">
                <DropdownToggle caret>
                    Template #{activeTemplate.id}
                </DropdownToggle>
                <DropdownMenu>
                    {templates && 
                        templates.map(template => template.id !== activeTemplate.id && <DropdownItem 
                            onClick={() => this.handleChange(template)}
                            key={template.id}
                        >
                            Template #{template.id}
                        </DropdownItem>)
                    }
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
}

export default connect(
    state => ({
        activeTemplate: state.templating.activeTemplate,
        templates: state.templating.templates,
    }),
    {
        fetchTemplates,
        changeActiveTemplate,
    }
)(SelectTemplate);