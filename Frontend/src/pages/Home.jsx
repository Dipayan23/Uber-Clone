import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="bg-cover bg-center h-screen pt-8 flex justify-between flex-col w-full"  style={{backgroundImage: 'url(https://imgs.search.brave.com/B0TSyiVdgH_SaFGGD2db1Ol-yw4LFkGQ9pjQRV67Wow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZWYyLnByb21lYWku/cHJvL3Byb2Nlc3Mv/ZG8vMDQ0NjQ1Nzc0/MGEyNmVhN2I3MzQ1/MGU5ODc0NzIzMzAu/d2VicD9zb3VyY2VV/cmw9L2cvcC9nYWxs/ZXJ5L3B1Ymxpc2gv/MjAyNC8xMi8yMS9i/NTBiYzc1MDUwN2I0/MjVkOGUwZGJiNzlh/MmZkMjU5NS5qcGcm/eC1vc3MtcHJvY2Vz/cz1pbWFnZS9yZXNp/emUsd181MDAsaF81/MDAvZm9ybWF0LHdl/YnAmc2lnbj03Nzhj/NGEyZTk2M2JkYWU5/NjdhNTZiYWUyY2I3/NjRjYg)'}}>
            <img src="https://imgs.search.brave.com/iUu_pSUB4XC14yY3lkGujRPUI3q11j4kizg-ipgasO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2ODc3/OXViZXItbG9nby13/aGl0ZS5wbmc" alt="uber_logo" className='w-16 ml-8'/>
            <div className="w-full bg-white p-5 rounded-t-3xl pb-7">
                <h2 className='text-2xl font-bold '>Get Started With Uber</h2>
                <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 mt-4 rounded'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home