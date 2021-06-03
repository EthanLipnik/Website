import * as React from 'react'
import PrivacyView from '../../PrivacyView'

export default class KairosPrivacyPage extends React.Component {
    render() {
        return (
            <div>
                <PrivacyView
                    appTitle="Kairos"
                    description="Kairos' use of information received from OpenWeatherMap APIs will adhere to the OpenWeatherMap User Data
            Policy, including the Limited Use requirements. Kairos does not send any user data to any other host or
            provider other than OpenWeatherMap."
                    components={[
                        {
                            title: "Data Kairos saves locally",
                            details: ["User location", "Saved cities", "Recent weather"]
                        },
                        {
                            title: "Data Kairos sends remotely to OpenWeatherMap",
                            details: ["User location", "User language"]
                        },
                        {
                            title: "How the data is saved",
                            details: ["On-device."]
                        }
                    ]}
                />
            </div>
        )
    }
}