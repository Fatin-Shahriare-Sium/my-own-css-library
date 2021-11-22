import React from 'react'
import ShowColor from './component/show-color';
import ShowColorHeader from './component/show-color-header';
let powerx = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const Index = () => {

    return (
        <div>
            <p className='text-primary sm:text-info xs:text-danger'>Allah is Almighty</p>
            <p style={{ fontSize: '4rem' }} className='hover:text-info'>Hover me</p>
            <div className='container bg-dark h-100'>
                <div className='row'>
                    <div className='bg-primary sm:bg-success h-30  col-md-5 col-sm-12 col-lg-12'>
                        <p>Allah is Almighty</p>
                    </div>
                    <div className='bg-success sm:bg-primary h-30  col-md-5 col-sm-12 col-lg-12'>
                        <p>Allah is Almighty</p>
                    </div>
                </div>
            </div>
            <div className='see w-100 h-30'>

            </div>
            <div className='container'>
                <p style={{ textAlign: 'center', fontWeight: '700' }}>Generating color using sass: </p>
                <div className='row show-color-wrapper'>
                    <div className=' col-sm-4 col-xs-12'>
                        <ShowColorHeader colorname='blue' hex='#0d6efd' />
                        {powerx.map((sig, index) => {
                            return <ShowColor key={index} colorUtility={`blue-${sig}`} textColor={sig < 600 ? 'black' : 'white'} />
                        })}

                    </div>
                    <div className=' col-sm-4 col-xs-12'>
                        <ShowColorHeader colorname='indigo' hex='#6610f2' />
                        {powerx.map((sig, index) => {
                            return <ShowColor key={index} colorUtility={`indigo-${sig}`} textColor={sig < 600 ? 'black' : 'white'} />
                        })}

                    </div>
                    <div className=' col-sm-4 col-xs-12'>
                        <ShowColorHeader colorname='purple' hex='#6f42c1' />
                        {powerx.map((sig, index) => {
                            return <ShowColor key={index} colorUtility={`purple-${sig}`} textColor={sig < 600 ? 'black' : 'white'} />
                        })}

                    </div>
                    <div className=' col-sm-4 col-xs-12'>
                        <ShowColorHeader colorname='pink' hex='#d63384' />
                        {powerx.map((sig, index) => {
                            return <ShowColor key={index} colorUtility={`pink-${sig}`} textColor={sig < 600 ? 'black' : 'white'} />
                        })}

                    </div>
                    <div className=' col-sm-4 col-xs-12'>
                        <ShowColorHeader colorname='red' hex='#dc3545' />
                        {powerx.map((sig, index) => {
                            return <ShowColor key={index} colorUtility={`red-${sig}`} textColor={sig < 600 ? 'black' : 'white'} />
                        })}

                    </div>
                    <div className=' col-sm-4 col-xs-12'>
                        <ShowColorHeader colorname='orange' hex='#fd7e14' />
                        {powerx.map((sig, index) => {
                            return <ShowColor key={index} colorUtility={`orange-${sig}`} textColor={sig < 600 ? 'black' : 'white'} />
                        })}

                    </div>
                    <div className=' col-sm-4 col-xs-12'>
                        <ShowColorHeader colorname='green' hex='#198754' />
                        {powerx.map((sig, index) => {
                            return <ShowColor key={index} colorUtility={`green-${sig}`} textColor={sig < 600 ? 'black' : 'white'} />
                        })}

                    </div>
                    <div className=' col-sm-4 col-xs-12'>
                        <ShowColorHeader colorname='teal' hex='#20c997' />
                        {powerx.map((sig, index) => {
                            return <ShowColor key={index} colorUtility={`teal-${sig}`} textColor={sig < 600 ? 'black' : 'white'} />
                        })}

                    </div>
                    <div className=' col-sm-4 col-xs-12'>
                        <ShowColorHeader colorname='cyan' hex='#0dcaf0' />
                        {powerx.map((sig, index) => {
                            return <ShowColor key={index} colorUtility={`cyan-${sig}`} textColor={sig < 600 ? 'black' : 'white'} />
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
