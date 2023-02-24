import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import ViewCarouselRoundedIcon from '@mui/icons-material/ViewCarouselRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import TocRoundedIcon from '@mui/icons-material/TocRounded';

export const Items = [
    {
        name:"Dashboard",
        path:"/",
        icon:<DashboardIcon />
    },
    {
        name:"Category",
        path:"/category",
        icon:<CategoryRoundedIcon />
    },
    {
        name:"Order",
        path:"/order",
        icon:<TocRoundedIcon />
    },
    {
        name:"Product",
        path:"/product",
        icon:<ProductionQuantityLimitsRoundedIcon />
    },
    {
        name:"Banner",
        path:"/banner",
        icon:<ViewCarouselRoundedIcon />
    },
    {
        name:"Report",
        path:"/report",
        icon:<ReportRoundedIcon />
    },
]