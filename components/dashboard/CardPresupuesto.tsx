import React from 'react'

export const CardPresupuesto = () => {
    return (
        <div className='bg-white py-4 px-4 rounded-md basis-1/2'>
            <h3 className='subtitulos'>
                Presupuesto mensual
            </h3>
            <div className='bg-zinc-100 rounded-md px-3 pt-4 my-2'>
                <p className='card-amount py-1'>₡ 260000</p>
                <hr />
                <div className='py-1 mt-2'>
                    <p className='text-gray-600 text-sm font-mono'>Monto disponible</p>
                    <p className='text-gray-700 font-mono'>₡60000</p>
                </div>
            </div>
        </div>
    )
}
