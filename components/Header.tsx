import React from 'react'

export const Header = () => {
    return (
        <div className='shadow-md h-20 px-6 py-2'>
            <div className='flex flex-row-reverse content-center gap-4'>
                <div className='flex gap-2'>
                    <div>Information</div>
                    <div>Image</div>
                </div>
                <ul className='flex gap-2'>
                    <li>Dark</li>
                    <li>Notifications</li>
                </ul>

            </div>
        </div>
    )
}
