const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:flex-col md:fixed
            md:inset-y-0-[80] bg-gray-900">
                <div>
                    Hello sidebar
                </div>
            </div>
        </div>
     );
}
 
export default DashboardLayout;