import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { fetchTransactionHistory } from '../services/api';
import TransactionItem from '../components/TransactionItem';
// import Pagination from '../components/Pagination';
import styles from '../styles/History.module.css';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ScheduleIcon from "@mui/icons-material/Schedule";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import SettlementPopup from '../components/SettlementPopup';

const testData = [
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754976050017508",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754976051100448",
            "group_id": "21061",
            "amount": "1.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "SUCCESS",
            "services_ad_details": {},
            "created_date": "2025-08-12T10:50:51",
            "updated_date": "2025-08-12T10:50:51"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754917718153662",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754917718881224",
            "group_id": "21061",
            "amount": "903.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T18:38:38",
            "updated_date": "2025-08-11T18:38:38"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754917671877498",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754917672906227",
            "group_id": "21061",
            "amount": "868.50",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T18:37:52",
            "updated_date": "2025-08-11T18:37:52"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754916807597490",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754916808652841",
            "group_id": "21061",
            "amount": "868.50",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T18:23:28",
            "updated_date": "2025-08-11T18:23:28"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754916774061491",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754916774999559",
            "group_id": "21061",
            "amount": "903.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T18:22:54",
            "updated_date": "2025-08-11T18:22:54"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754916721528354",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754916722584839",
            "group_id": "21061",
            "amount": "903.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T18:22:02",
            "updated_date": "2025-08-11T18:22:02"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754916469007171",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754916469804683",
            "group_id": "21061",
            "amount": "903.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T18:17:49",
            "updated_date": "2025-08-11T18:17:49"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754898845822610",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754898847046174",
            "group_id": "21061",
            "amount": "1.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T13:24:07",
            "updated_date": "2025-08-11T13:24:07"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754892500622946",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754892501397232",
            "group_id": "21061",
            "amount": "1.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T11:38:21",
            "updated_date": "2025-08-11T11:38:21"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754891183301836",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754891184143350",
            "group_id": "21061",
            "amount": "50.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T11:16:24",
            "updated_date": "2025-08-11T11:16:24"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754891038692256",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754891039441892",
            "group_id": "21061",
            "amount": "50.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T11:13:59",
            "updated_date": "2025-08-11T11:13:59"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754890530987987",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754890531941400",
            "group_id": "21061",
            "amount": "50.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T11:05:31",
            "updated_date": "2025-08-11T11:05:31"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754889519416211",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754889520202143",
            "group_id": "21061",
            "amount": "868.50",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T10:48:40",
            "updated_date": "2025-08-11T10:48:40"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754889456516578",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754889457554806",
            "group_id": "21061",
            "amount": "50.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T10:47:37",
            "updated_date": "2025-08-11T10:47:37"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754889384160123",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754889384942399",
            "group_id": "21061",
            "amount": "22.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T10:46:24",
            "updated_date": "2025-08-11T10:46:24"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754889239161372",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754889239814757",
            "group_id": "21061",
            "amount": "22.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T10:43:59",
            "updated_date": "2025-08-11T10:43:59"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754889113443540",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754889114134476",
            "group_id": "21061",
            "amount": "1296.82",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T10:41:54",
            "updated_date": "2025-08-11T10:41:54"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754889080988455",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754889081780641",
            "group_id": "21061",
            "amount": "1296.82",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T10:41:21",
            "updated_date": "2025-08-11T10:41:21"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754888938066686",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754888938787324",
            "group_id": "21061",
            "amount": "1296.82",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T10:38:58",
            "updated_date": "2025-08-11T10:38:58"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754888733368405",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754888734268132",
            "group_id": "21061",
            "amount": "1296.82",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T10:35:34",
            "updated_date": "2025-08-11T10:35:34"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754888633711311",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754888634555654",
            "group_id": "21061",
            "amount": "1296.82",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T10:33:54",
            "updated_date": "2025-08-11T10:33:54"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754888473370763",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754888474170962",
            "group_id": "21061",
            "amount": "1.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T10:31:14",
            "updated_date": "2025-08-11T10:31:14"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754888418789829",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754888420246956",
            "group_id": "21061",
            "amount": "1.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-11T10:30:20",
            "updated_date": "2025-08-11T10:30:20"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754658119018907",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754658119834755",
            "group_id": "21061",
            "amount": "903.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-08T18:31:59",
            "updated_date": "2025-08-08T18:31:59"
        },
        {
            "user_id": 28205,
            "service_child_name": "",
            "app_id": "60",
            "aggregator_id": "348",
            "service_id": "111",
            "service_child_id": "",
            "service_ref_id": "NIPPYPG1754658103372115",
            "core_ref_id": "",
            "service_type": "IN",
            "service_action_type": "PAYIN",
            "transaction_id": "1754658104257629",
            "group_id": "21061",
            "amount": "903.00",
            "wallet": {
                "id": 80,
                "name": "INR",
                "image": "https://nippy.blr1.digitaloceanspaces.com/nippy/wallet/80/symbol/1739443598065.png"
            },
            "status": "PENDING",
            "services_ad_details": {},
            "created_date": "2025-08-08T18:31:44",
            "updated_date": "2025-08-08T18:31:44"
        }
    ]

const History = () => {
  const { serviceId, authToken } = useAppContext();
  // const [page, setPage] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
    const [settleTime, setSettleTime] = useState("");
    const [open, setOpen] = useState(false);

  const loadPage = async (p = 0) => {
    setLoading(true);
    setError(null);
    try {
      // const data = await fetchTransactionHistory({ service_id: serviceId, token: authToken });
      // // console.log("apidata", data)
      // setTransactions(data?.data);
        setTransactions(testData);
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || err.message || 'Failed to load transactions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadPage(0); }, []);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTransactions = transactions.filter(tx =>
    (tx.name ?? tx.remitterName ?? tx.payerName ?? 'Unknown')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

useEffect(() => {
    const now = new Date();
    const tomorrow = new Date(now.getTime() + 12 * 60 * 60 * 1000);
    const timeStr = tomorrow.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const day = tomorrow.getDate();
    const month = tomorrow.toLocaleString("en-US", { month: "short" });
    const year = tomorrow.getFullYear().toString().slice(-2);

    const getOrdinal = (d) => {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };

    const dateStr = `${day}${getOrdinal(day)} ${month} '${year}`;

    setSettleTime(`${timeStr}, ${dateStr}`);
  }, []);

  return (
    <div className={styles.wrap}>
    <div className={styles.headerRow}>
      <h2>Settlement History</h2>
      <button className={styles.downloadButton}>Download Statement</button>
      </div>
      <div className={styles.searchRow}>
        <div className={styles.searchBar}>
          <SearchIcon className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </div>
        <FilterListIcon className={styles.filterIcon} />
      </div>

    <div className={styles.scheduleRow}>
        <ScheduleIcon className={styles.icon} />
        <span className={styles.scheduleText}>
          Today's total collection will be auto-settled by <strong>{settleTime}</strong> Tomorrow.
        </span>
        <button className={styles.settleNow} onClick={()=>setOpen(true)}>
          <TimerOutlinedIcon className={styles.timerIcon} />
          Settle Now!
        </button>
        <SettlementPopup open={open} onClose={()=>setOpen(false)}/>
      </div>
      <TransactionItem data={transactions} />    
    </div>
  );
};

export default History;

