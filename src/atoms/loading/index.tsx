

/**
 * componente de loading
 */
const Loading=()=>{
    return <div className="fixed w-full h-full bg-popDropLight dark:bg-popDropDark z-10 grid place-items-center">
        <div className="w-14 h-14 border-4 border-gray-200 border-t-neutral-700 border-r-neutral-700 border-b-neutral-700 animate-spin rounded-full" />
    </div>
}

export default Loading;