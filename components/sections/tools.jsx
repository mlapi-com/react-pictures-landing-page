
export default function Tools(){
    return (
        <div className="text-slate-900">
            <section className="mb-36 mt-20 flex justify-center items-center flex-col w-full" id="features">
            <div className="px-8 text-5xl font-bold text-zinc-800 dark:text-zinc-200 mb-8">Tools</div>
            <div className="grid gap-4 w-full justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src="/public/images/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                    <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div> 
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
                </div>
            
            </div>
            </section>
        </div>
    )
}