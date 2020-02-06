import React from 'react'


export default function Tariff({ tariff }) {
   
   
    return (
        <div className="main">
            <div className="block">
                <span className="name">{tariff.name}</span>
                <img src={tariff.hit} alt="" className="hit" />
                <p className="fee">{tariff.fee}</p>
                <div className="price">{tariff.price !== 0 && tariff.price}
                    <div className="right"><div className="r">{tariff.price !== 0 && tariff.r}</div>
                        <div className="period">{tariff.price !== 0 && tariff.period}</div></div>
                </div>
            </div>
            <div className="block">
                <p className="internetP">{tariff.internetPackage !== 0 && tariff.internetPackage}
                    <span className="gb">{tariff.internetPackage !== 0 && tariff.gb}</span> </p>


                <span className="unlimP">{tariff.unlimPackage !== 0 && tariff.unlimPackage}</span>
                <div className="socialIcons">{tariff.socialMediaStatus && tariff.socialMediaIcons.map(o => <img className="icon" src={o} alt="dz" />)}</div>

                <span className="rouming">{tariff.rouming}</span>
            </div>
            <div className="block">
                <p className="callMinutes">{tariff.callMinutes !== 0 && tariff.callMinutes}
                    <span className="callMinutesText">{tariff.callMinutes !== 0 && tariff.callMinutesText}</span> </p>
                <span className="unlimMinutes">{tariff.unlimMinutes !== 0 && tariff.unlimMinutes}</span>
            </div>
            <div className="block">
                <p className="sms">{tariff.sms !== 0 && tariff.sms}
                    <span className="smsText">{tariff.sms !== 0 && tariff.smsText}</span> </p>
            </div>

        

        </div>
    )
}
