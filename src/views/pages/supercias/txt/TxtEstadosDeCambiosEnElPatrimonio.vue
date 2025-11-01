<script setup>
import { useInvoiceStore } from '@/views/apps/invoice/useInvoiceStore'
import $ from 'jquery'

import { useReportStore } from "@/@store/reportStore"
import { initializeEcpData } from "@core/utils/initializers"

const reportStore = useReportStore()

const props = defineProps({
  data: {
    pat_99_301: null,
    pat_99_302: null,
    pat_99_303: null,
    pat_99_30401: null,
    pat_99_30402: null,
    pat_99_30501: null,
    pat_99_30502: null,
    pat_99_30503: null,
    pat_99_30504: null,
    pat_99_30601: null,
    pat_99_30602: null,
    pat_99_30603: null,
    pat_99_30604: null,
    pat_99_30605: null,
    pat_99_30606: null,
    pat_99_30607: null,
    pat_99_30701: null,
    pat_99_30702: null,
    pat_99_30: null,
    pat_99_31: null,
  },
})

const ecpData = initializeEcpData()

let ecp_ = ref('0')
let ecp_9901_301 = ecpData['ecp_9901_301']
let ecp_9901_302 = ecpData['ecp_9901_302']
let ecp_9901_303 = ecpData['ecp_9901_303']
let ecp_9901_30401 = ecpData['ecp_9901_30401']
let ecp_9901_30402 = ecpData['ecp_9901_30402']
let ecp_9901_30501 = ecpData['ecp_9901_30501']
let ecp_9901_30502 = ecpData['ecp_9901_30502']
let ecp_9901_30503 = ecpData['ecp_9901_30503']
let ecp_9901_30504 = ecpData['ecp_9901_30504']
let ecp_9901_30601 = ecpData['ecp_9901_30601']
let ecp_9901_30602 = ecpData['ecp_9901_30602']
let ecp_9901_30603 = ecpData['ecp_9901_30603']
let ecp_9901_30604 = ecpData['ecp_9901_30604']
let ecp_9901_30605 = ecpData['ecp_9901_30605']
let ecp_9901_30606 = ecpData['ecp_9901_30606']
let ecp_9901_30607 = ecpData['ecp_9901_30607']
let ecp_9901_30701 = ecpData['ecp_9901_30701']
let ecp_9901_30702 = ecpData['ecp_9901_30702']
let ecp_9901_30 = ecpData['ecp_9901_30']
let ecp_9901_31 = ecpData['ecp_9901_31']
let ecp_9901_Total = ecpData['ecp_9901_Total']

// ECP_990101
let ecp_990101_301 = ecpData['ecp_990101_301']
let ecp_990101_302 = ecpData['ecp_990101_302']
let ecp_990101_303 = ecpData['ecp_990101_303']
let ecp_990101_30401 = ecpData['ecp_990101_30401']
let ecp_990101_30402 = ecpData['ecp_990101_30402']
let ecp_990101_30501 = ecpData['ecp_990101_30501']
let ecp_990101_30502 = ecpData['ecp_990101_30502']
let ecp_990101_30503 = ecpData['ecp_990101_30503']
let ecp_990101_30504 = ecpData['ecp_990101_30504']
let ecp_990101_30601 = ecpData['ecp_990101_30601']
let ecp_990101_30602 = ecpData['ecp_990101_30602']
let ecp_990101_30603 = ecpData['ecp_990101_30603']
let ecp_990101_30604 = ecpData['ecp_990101_30604']
let ecp_990101_30605 = ecpData['ecp_990101_30605']
let ecp_990101_30606 = ecpData['ecp_990101_30606']
let ecp_990101_30607 = ecpData['ecp_990101_30607']
let ecp_990101_30701 = ecpData['ecp_990101_30701']
let ecp_990101_30702 = ecpData['ecp_990101_30702']
let ecp_990101_30 = ecpData['ecp_990101_30']
let ecp_990101_31 = ecpData['ecp_990101_31']
let ecp_990101_Total = ecpData['ecp_990101_Total']

// ECP_990102
let ecp_990102_301 = ecpData['ecp_990102_301']
let ecp_990102_302 = ecpData['ecp_990102_302']
let ecp_990102_303 = ecpData['ecp_990102_303']
let ecp_990102_30401 = ecpData['ecp_990102_30401']
let ecp_990102_30402 = ecpData['ecp_990102_30402']
let ecp_990102_30501 = ecpData['ecp_990102_30501']
let ecp_990102_30502 = ecpData['ecp_990102_30502']
let ecp_990102_30503 = ecpData['ecp_990102_30503']
let ecp_990102_30504 = ecpData['ecp_990102_30504']
let ecp_990102_30601 = ecpData['ecp_990102_30601']
let ecp_990102_30602 = ecpData['ecp_990102_30602']
let ecp_990102_30603 = ecpData['ecp_990102_30603']
let ecp_990102_30604 = ecpData['ecp_990102_30604']
let ecp_990102_30605 = ecpData['ecp_990102_30605']
let ecp_990102_30606 = ecpData['ecp_990102_30606']
let ecp_990102_30607 = ecpData['ecp_990102_30607']
let ecp_990102_30701 = ecpData['ecp_990102_30701']
let ecp_990102_30702 = ecpData['ecp_990102_30702']
let ecp_990102_30 = ecpData['ecp_990102_30']
let ecp_990102_31 = ecpData['ecp_990102_31']
let ecp_990102_Total = ecpData['ecp_990102_Total']

// ECP_990103
let ecp_990103_301 = ecpData['ecp_990103_301']
let ecp_990103_302 = ecpData['ecp_990103_302']
let ecp_990103_303 = ecpData['ecp_990103_303']
let ecp_990103_30401 = ecpData['ecp_990103_30401']
let ecp_990103_30402 = ecpData['ecp_990103_30402']
let ecp_990103_30501 = ecpData['ecp_990103_30501']
let ecp_990103_30502 = ecpData['ecp_990103_30502']
let ecp_990103_30503 = ecpData['ecp_990103_30503']
let ecp_990103_30504 = ecpData['ecp_990103_30504']
let ecp_990103_30601 = ecpData['ecp_990103_30601']
let ecp_990103_30602 = ecpData['ecp_990103_30602']
let ecp_990103_30603 = ecpData['ecp_990103_30603']
let ecp_990103_30604 = ecpData['ecp_990103_30604']
let ecp_990103_30605 = ecpData['ecp_990103_30605']
let ecp_990103_30606 = ecpData['ecp_990103_30606']
let ecp_990103_30607 = ecpData['ecp_990103_30607']
let ecp_990103_30701 = ecpData['ecp_990103_30701']
let ecp_990103_30702 = ecpData['ecp_990103_30702']
let ecp_990103_30 = ecpData['ecp_990103_30']
let ecp_990103_31 = ecpData['ecp_990103_31']
let ecp_990103_Total = ecpData['ecp_990103_Total']

// ECP_9902
let ecp_9902_301 = ecpData['ecp_9902_301']
let ecp_9902_302 = ecpData['ecp_9902_302']
let ecp_9902_303 = ecpData['ecp_9902_303']
let ecp_9902_30401 = ecpData['ecp_9902_30401']
let ecp_9902_30402 = ecpData['ecp_9902_30402']
let ecp_9902_30501 = ecpData['ecp_9902_30501']
let ecp_9902_30502 = ecpData['ecp_9902_30502']
let ecp_9902_30503 = ecpData['ecp_9902_30503']
let ecp_9902_30504 = ecpData['ecp_9902_30504']
let ecp_9902_30601 = ecpData['ecp_9902_30601']
let ecp_9902_30602 = ecpData['ecp_9902_30602']
let ecp_9902_30603 = ecpData['ecp_9902_30603']
let ecp_9902_30604 = ecpData['ecp_9902_30604']
let ecp_9902_30605 = ecpData['ecp_9902_30605']
let ecp_9902_30606 = ecpData['ecp_9902_30606']
let ecp_9902_30607 = ecpData['ecp_9902_30607']
let ecp_9902_30701 = ecpData['ecp_9902_30701']
let ecp_9902_30702 = ecpData['ecp_9902_30702']
let ecp_9902_30 = ecpData['ecp_9902_30']
let ecp_9902_31 = ecpData['ecp_9902_31']
let ecp_9902_Total = ecpData['ecp_9902_Total']

// ECP_990201
let ecp_990201_301 = ecpData['ecp_990201_301']
let ecp_990201_302 = ecpData['ecp_990201_302']
let ecp_990201_303 = ecpData['ecp_990201_303']
let ecp_990201_30401 = ecpData['ecp_990201_30401']
let ecp_990201_30402 = ecpData['ecp_990201_30402']
let ecp_990201_30501 = ecpData['ecp_990201_30501']
let ecp_990201_30502 = ecpData['ecp_990201_30502']
let ecp_990201_30503 = ecpData['ecp_990201_30503']
let ecp_990201_30504 = ecpData['ecp_990201_30504']
let ecp_990201_30601 = ecpData['ecp_990201_30601']
let ecp_990201_30602 = ecpData['ecp_990201_30602']
let ecp_990201_30603 = ecpData['ecp_990201_30603']
let ecp_990201_30604 = ecpData['ecp_990201_30604']
let ecp_990201_30605 = ecpData['ecp_990201_30605']
let ecp_990201_30606 = ecpData['ecp_990201_30606']
let ecp_990201_30607 = ecpData['ecp_990201_30607']
let ecp_990201_30701 = ecpData['ecp_990201_30701']
let ecp_990201_30702 = ecpData['ecp_990201_30702']
let ecp_990201_30 = ecpData['ecp_990201_30']
let ecp_990201_31 = ecpData['ecp_990201_31']
let ecp_990201_Total = ecpData['ecp_990201_Total']

// ECP_990202
let ecp_990202_301 = ecpData['ecp_990202_301']
let ecp_990202_302 = ecpData['ecp_990202_302']
let ecp_990202_303 = ecpData['ecp_990202_303']
let ecp_990202_30401 = ecpData['ecp_990202_30401']
let ecp_990202_30402 = ecpData['ecp_990202_30402']
let ecp_990202_30501 = ecpData['ecp_990202_30501']
let ecp_990202_30502 = ecpData['ecp_990202_30502']
let ecp_990202_30503 = ecpData['ecp_990202_30503']
let ecp_990202_30504 = ecpData['ecp_990202_30504']
let ecp_990202_30601 = ecpData['ecp_990202_30601']
let ecp_990202_30602 = ecpData['ecp_990202_30602']
let ecp_990202_30603 = ecpData['ecp_990202_30603']
let ecp_990202_30604 = ecpData['ecp_990202_30604']
let ecp_990202_30605 = ecpData['ecp_990202_30605']
let ecp_990202_30606 = ecpData['ecp_990202_30606']
let ecp_990202_30607 = ecpData['ecp_990202_30607']
let ecp_990202_30701 = ecpData['ecp_990202_30701']
let ecp_990202_30702 = ecpData['ecp_990202_30702']
let ecp_990202_30 = ecpData['ecp_990202_30']
let ecp_990202_31 = ecpData['ecp_990202_31']
let ecp_990202_Total = ecpData['ecp_990202_Total']

// ECP_990203
let ecp_990203_301 = ecpData['ecp_990203_301']
let ecp_990203_302 = ecpData['ecp_990203_302']
let ecp_990203_303 = ecpData['ecp_990203_303']
let ecp_990203_30401 = ecpData['ecp_990203_30401']
let ecp_990203_30402 = ecpData['ecp_990203_30402']
let ecp_990203_30501 = ecpData['ecp_990203_30501']
let ecp_990203_30502 = ecpData['ecp_990203_30502']
let ecp_990203_30503 = ecpData['ecp_990203_30503']
let ecp_990203_30504 = ecpData['ecp_990203_30504']
let ecp_990203_30601 = ecpData['ecp_990203_30601']
let ecp_990203_30602 = ecpData['ecp_990203_30602']
let ecp_990203_30603 = ecpData['ecp_990203_30603']
let ecp_990203_30604 = ecpData['ecp_990203_30604']
let ecp_990203_30605 = ecpData['ecp_990203_30605']
let ecp_990203_30606 = ecpData['ecp_990203_30606']
let ecp_990203_30607 = ecpData['ecp_990203_30607']
let ecp_990203_30701 = ecpData['ecp_990203_30701']
let ecp_990203_30702 = ecpData['ecp_990203_30702']
let ecp_990203_30 = ecpData['ecp_990203_30']
let ecp_990203_31 = ecpData['ecp_990203_31']
let ecp_990203_Total = ecpData['ecp_990203_Total']

// ECP_990204
let ecp_990204_301 = ecpData['ecp_990204_301']
let ecp_990204_302 = ecpData['ecp_990204_302']
let ecp_990204_303 = ecpData['ecp_990204_303']
let ecp_990204_30401 = ecpData['ecp_990204_30401']
let ecp_990204_30402 = ecpData['ecp_990204_30402']
let ecp_990204_30501 = ecpData['ecp_990204_30501']
let ecp_990204_30502 = ecpData['ecp_990204_30502']
let ecp_990204_30503 = ecpData['ecp_990204_30503']
let ecp_990204_30504 = ecpData['ecp_990204_30504']
let ecp_990204_30601 = ecpData['ecp_990204_30601']
let ecp_990204_30602 = ecpData['ecp_990204_30602']
let ecp_990204_30603 = ecpData['ecp_990204_30603']
let ecp_990204_30604 = ecpData['ecp_990204_30604']
let ecp_990204_30605 = ecpData['ecp_990204_30605']
let ecp_990204_30606 = ecpData['ecp_990204_30606']
let ecp_990204_30607 = ecpData['ecp_990204_30607']
let ecp_990204_30701 = ecpData['ecp_990204_30701']
let ecp_990204_30702 = ecpData['ecp_990204_30702']
let ecp_990204_30 = ecpData['ecp_990204_30']
let ecp_990204_31 = ecpData['ecp_990204_31']
let ecp_990204_Total = ecpData['ecp_990204_Total']

// ECP_990205
let ecp_990205_301 = ecpData['ecp_990205_301']
let ecp_990205_302 = ecpData['ecp_990205_302']
let ecp_990205_303 = ecpData['ecp_990205_303']
let ecp_990205_30401 = ecpData['ecp_990205_30401']
let ecp_990205_30402 = ecpData['ecp_990205_30402']
let ecp_990205_30501 = ecpData['ecp_990205_30501']
let ecp_990205_30502 = ecpData['ecp_990205_30502']
let ecp_990205_30503 = ecpData['ecp_990205_30503']
let ecp_990205_30504 = ecpData['ecp_990205_30504']
let ecp_990205_30601 = ecpData['ecp_990205_30601']
let ecp_990205_30602 = ecpData['ecp_990205_30602']
let ecp_990205_30603 = ecpData['ecp_990205_30603']
let ecp_990205_30604 = ecpData['ecp_990205_30604']
let ecp_990205_30605 = ecpData['ecp_990205_30605']
let ecp_990205_30606 = ecpData['ecp_990205_30606']
let ecp_990205_30607 = ecpData['ecp_990205_30607']
let ecp_990205_30701 = ecpData['ecp_990205_30701']
let ecp_990205_30702 = ecpData['ecp_990205_30702']
let ecp_990205_30 = ecpData['ecp_990205_30']
let ecp_990205_31 = ecpData['ecp_990205_31']
let ecp_990205_Total = ecpData['ecp_990205_Total']

// ECP_990206
let ecp_990206_301 = ecpData['ecp_990206_301']
let ecp_990206_302 = ecpData['ecp_990206_302']
let ecp_990206_303 = ecpData['ecp_990206_303']
let ecp_990206_30401 = ecpData['ecp_990206_30401']
let ecp_990206_30402 = ecpData['ecp_990206_30402']
let ecp_990206_30501 = ecpData['ecp_990206_30501']
let ecp_990206_30502 = ecpData['ecp_990206_30502']
let ecp_990206_30503 = ecpData['ecp_990206_30503']
let ecp_990206_30504 = ecpData['ecp_990206_30504']
let ecp_990206_30601 = ecpData['ecp_990206_30601']
let ecp_990206_30602 = ecpData['ecp_990206_30602']
let ecp_990206_30603 = ecpData['ecp_990206_30603']
let ecp_990206_30604 = ecpData['ecp_990206_30604']
let ecp_990206_30605 = ecpData['ecp_990206_30605']
let ecp_990206_30606 = ecpData['ecp_990206_30606']
let ecp_990206_30607 = ecpData['ecp_990206_30607']
let ecp_990206_30701 = ecpData['ecp_990206_30701']
let ecp_990206_30702 = ecpData['ecp_990206_30702']
let ecp_990206_30 = ecpData['ecp_990206_30']
let ecp_990206_31 = ecpData['ecp_990206_31']
let ecp_990206_Total = ecpData['ecp_990206_Total']

// ECP_990207
let ecp_990207_301 = ecpData['ecp_990207_301']
let ecp_990207_302 = ecpData['ecp_990207_302']
let ecp_990207_303 = ecpData['ecp_990207_303']
let ecp_990207_30401 = ecpData['ecp_990207_30401']
let ecp_990207_30402 = ecpData['ecp_990207_30402']
let ecp_990207_30501 = ecpData['ecp_990207_30501']
let ecp_990207_30502 = ecpData['ecp_990207_30502']
let ecp_990207_30503 = ecpData['ecp_990207_30503']
let ecp_990207_30504 = ecpData['ecp_990207_30504']
let ecp_990207_30601 = ecpData['ecp_990207_30601']
let ecp_990207_30602 = ecpData['ecp_990207_30602']
let ecp_990207_30603 = ecpData['ecp_990207_30603']
let ecp_990207_30604 = ecpData['ecp_990207_30604']
let ecp_990207_30605 = ecpData['ecp_990207_30605']
let ecp_990207_30606 = ecpData['ecp_990207_30606']
let ecp_990207_30607 = ecpData['ecp_990207_30607']
let ecp_990207_30701 = ecpData['ecp_990207_30701']
let ecp_990207_30702 = ecpData['ecp_990207_30702']
let ecp_990207_30 = ecpData['ecp_990207_30']
let ecp_990207_31 = ecpData['ecp_990207_31']
let ecp_990207_Total = ecpData['ecp_990207_Total']

// ECP_990208
let ecp_990208_301 = ecpData['ecp_990208_301']
let ecp_990208_302 = ecpData['ecp_990208_302']
let ecp_990208_303 = ecpData['ecp_990208_303']
let ecp_990208_30401 = ecpData['ecp_990208_30401']
let ecp_990208_30402 = ecpData['ecp_990208_30402']
let ecp_990208_30501 = ecpData['ecp_990208_30501']
let ecp_990208_30502 = ecpData['ecp_990208_30502']
let ecp_990208_30503 = ecpData['ecp_990208_30503']
let ecp_990208_30504 = ecpData['ecp_990208_30504']
let ecp_990208_30601 = ecpData['ecp_990208_30601']
let ecp_990208_30602 = ecpData['ecp_990208_30602']
let ecp_990208_30603 = ecpData['ecp_990208_30603']
let ecp_990208_30604 = ecpData['ecp_990208_30604']
let ecp_990208_30605 = ecpData['ecp_990208_30605']
let ecp_990208_30606 = ecpData['ecp_990208_30606']
let ecp_990208_30607 = ecpData['ecp_990208_30607']
let ecp_990208_30701 = ecpData['ecp_990208_30701']
let ecp_990208_30702 = ecpData['ecp_990208_30702']
let ecp_990208_30 = ecpData['ecp_990208_30']
let ecp_990208_31 = ecpData['ecp_990208_31']
let ecp_990208_Total = ecpData['ecp_990208_Total']

// ECP_990209
let ecp_990209_301 = ecpData['ecp_990209_301']
let ecp_990209_302 = ecpData['ecp_990209_302']
let ecp_990209_303 = ecpData['ecp_990209_303']
let ecp_990209_30401 = ecpData['ecp_990209_30401']
let ecp_990209_30402 = ecpData['ecp_990209_30402']
let ecp_990209_30501 = ecpData['ecp_990209_30501']
let ecp_990209_30502 = ecpData['ecp_990209_30502']
let ecp_990209_30503 = ecpData['ecp_990209_30503']
let ecp_990209_30504 = ecpData['ecp_990209_30504']
let ecp_990209_30601 = ecpData['ecp_990209_30601']
let ecp_990209_30602 = ecpData['ecp_990209_30602']
let ecp_990209_30603 = ecpData['ecp_990209_30603']
let ecp_990209_30604 = ecpData['ecp_990209_30604']
let ecp_990209_30605 = ecpData['ecp_990209_30605']
let ecp_990209_30606 = ecpData['ecp_990209_30606']
let ecp_990209_30607 = ecpData['ecp_990209_30607']
let ecp_990209_30701 = ecpData['ecp_990209_30701']
let ecp_990209_30702 = ecpData['ecp_990209_30702']
let ecp_990209_30 = ecpData['ecp_990209_30']
let ecp_990209_31 = ecpData['ecp_990209_31']
let ecp_990209_Total = ecpData['ecp_990209_Total']

// ECP_99020901
let ecp_99020901_301 = ecpData['ecp_99020901_301']
let ecp_99020901_302 = ecpData['ecp_99020901_302']
let ecp_99020901_303 = ecpData['ecp_99020901_303']
let ecp_99020901_30401 = ecpData['ecp_99020901_30401']
let ecp_99020901_30402 = ecpData['ecp_99020901_30402']
let ecp_99020901_30501 = ecpData['ecp_99020901_30501']
let ecp_99020901_30502 = ecpData['ecp_99020901_30502']
let ecp_99020901_30503 = ecpData['ecp_99020901_30503']
let ecp_99020901_30504 = ecpData['ecp_99020901_30504']
let ecp_99020901_30601 = ecpData['ecp_99020901_30601']
let ecp_99020901_30602 = ecpData['ecp_99020901_30602']
let ecp_99020901_30603 = ecpData['ecp_99020901_30603']
let ecp_99020901_30604 = ecpData['ecp_99020901_30604']
let ecp_99020901_30605 = ecpData['ecp_99020901_30605']
let ecp_99020901_30606 = ecpData['ecp_99020901_30606']
let ecp_99020901_30607 = ecpData['ecp_99020901_30607']
let ecp_99020901_30701 = ecpData['ecp_99020901_30701']
let ecp_99020901_30702 = ecpData['ecp_99020901_30702']
let ecp_99020901_30 = ecpData['ecp_99020901_30']
let ecp_99020901_31 = ecpData['ecp_99020901_31']
let ecp_99020901_Total = ecpData['ecp_99020901_Total']

// ECP_99020902
let ecp_99020902_301 = ecpData['ecp_99020902_301']
let ecp_99020902_302 = ecpData['ecp_99020902_302']
let ecp_99020902_303 = ecpData['ecp_99020902_303']
let ecp_99020902_30401 = ecpData['ecp_99020902_30401']
let ecp_99020902_30402 = ecpData['ecp_99020902_30402']
let ecp_99020902_30501 = ecpData['ecp_99020902_30501']
let ecp_99020902_30502 = ecpData['ecp_99020902_30502']
let ecp_99020902_30503 = ecpData['ecp_99020902_30503']
let ecp_99020902_30504 = ecpData['ecp_99020902_30504']
let ecp_99020902_30601 = ecpData['ecp_99020902_30601']
let ecp_99020902_30602 = ecpData['ecp_99020902_30602']
let ecp_99020902_30603 = ecpData['ecp_99020902_30603']
let ecp_99020902_30604 = ecpData['ecp_99020902_30604']
let ecp_99020902_30605 = ecpData['ecp_99020902_30605']
let ecp_99020902_30606 = ecpData['ecp_99020902_30606']
let ecp_99020902_30607 = ecpData['ecp_99020902_30607']
let ecp_99020902_30701 = ecpData['ecp_99020902_30701']
let ecp_99020902_30702 = ecpData['ecp_99020902_30702']
let ecp_99020902_30 = ecpData['ecp_99020902_30']
let ecp_99020902_31 = ecpData['ecp_99020902_31']
let ecp_99020902_Total = ecpData['ecp_99020902_Total']

// ECP_990210
let ecp_990210_301 = ecpData['ecp_990210_301']
let ecp_990210_302 = ecpData['ecp_990210_302']
let ecp_990210_303 = ecpData['ecp_990210_303']
let ecp_990210_30401 = ecpData['ecp_990210_30401']
let ecp_990210_30402 = ecpData['ecp_990210_30402']
let ecp_990210_30501 = ecpData['ecp_990210_30501']
let ecp_990210_30502 = ecpData['ecp_990210_30502']
let ecp_990210_30503 = ecpData['ecp_990210_30503']
let ecp_990210_30504 = ecpData['ecp_990210_30504']
let ecp_990210_30601 = ecpData['ecp_990210_30601']
let ecp_990210_30602 = ecpData['ecp_990210_30602']
let ecp_990210_30603 = ecpData['ecp_990210_30603']
let ecp_990210_30604 = ecpData['ecp_990210_30604']
let ecp_990210_30605 = ecpData['ecp_990210_30605']
let ecp_990210_30606 = ecpData['ecp_990210_30606']
let ecp_990210_30607 = ecpData['ecp_990210_30607']
let ecp_990210_30701 = ecpData['ecp_990210_30701']
let ecp_990210_30702 = ecpData['ecp_990210_30702']
let ecp_990210_30 = ecpData['ecp_990210_30']
let ecp_990210_31 = ecpData['ecp_990210_31']
let ecp_990210_Total = ecpData['ecp_990210_Total']

// ECP_99
let ecp_99_301 = ecpData['ecp_99_301']
let ecp_99_302 = ecpData['ecp_99_302']
let ecp_99_303 = ecpData['ecp_99_303']
let ecp_99_30401 = ecpData['ecp_99_30401']
let ecp_99_30402 = ecpData['ecp_99_30402']
let ecp_99_30501 = ecpData['ecp_99_30501']
let ecp_99_30502 = ecpData['ecp_99_30502']
let ecp_99_30503 = ecpData['ecp_99_30503']
let ecp_99_30504 = ecpData['ecp_99_30504']
let ecp_99_30601 = ecpData['ecp_99_30601']
let ecp_99_30602 = ecpData['ecp_99_30602']
let ecp_99_30603 = ecpData['ecp_99_30603']
let ecp_99_30604 = ecpData['ecp_99_30604']
let ecp_99_30605 = ecpData['ecp_99_30605']
let ecp_99_30606 = ecpData['ecp_99_30606']
let ecp_99_30607 = ecpData['ecp_99_30607']
let ecp_99_30701 = ecpData['ecp_99_30701']
let ecp_99_30702 = ecpData['ecp_99_30702']
let ecp_99_30 = ecpData['ecp_99_30']
let ecp_99_31 = ecpData['ecp_99_31']
let ecp_99_Total = ecpData['ecp_99_Total']

ecp_990210_30701 = computed(() =>  Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30701")).toFixed(2))
ecp_990210_30702 = computed(() =>  Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30702")).toFixed(2))

let convertirNegativo_990204_301 = async id => { ecp_990204_301.value = (Number(ecp_990204_301.value) > 0) ? Number(ecp_990204_301.value) * -1 : Number(ecp_990204_301.value) }
let convertirNegativo_990204_302 = async id => { ecp_990204_302.value = (Number(ecp_990204_302.value) > 0) ? Number(ecp_990204_302.value) * -1 : Number(ecp_990204_302.value) }
let convertirNegativo_990204_303 = async id => { ecp_990204_303.value = (Number(ecp_990204_303.value) > 0) ? Number(ecp_990204_303.value) * -1 : Number(ecp_990204_303.value) }
let convertirNegativo_990204_30401 = async id => { ecp_990204_30401.value = (Number(ecp_990204_30401.value) > 0) ? Number(ecp_990204_30401.value) * -1 : Number(ecp_990204_30401.value) }
let convertirNegativo_990204_30402 = async id => { ecp_990204_30402.value = (Number(ecp_990204_30402.value) > 0) ? Number(ecp_990204_30402.value) * -1 : Number(ecp_990204_30402.value) }
let convertirNegativo_990204_30501 = async id => { ecp_990204_30501.value = (Number(ecp_990204_30501.value) > 0) ? Number(ecp_990204_30501.value) * -1 : Number(ecp_990204_305016.value) }
let convertirNegativo_990204_30502 = async id => { ecp_990204_30502.value = (Number(ecp_990204_30502.value) > 0) ? Number(ecp_990204_30502.value) * -1 : Number(ecp_990204_30502.value) }
let convertirNegativo_990204_30503 = async id => { ecp_990204_30503.value = (Number(ecp_990204_30503.value) > 0) ? Number(ecp_990204_30503.value) * -1 : Number(ecp_990204_30503.value) }
let convertirNegativo_990204_30504 = async id => { ecp_990204_30504.value = (Number(ecp_990204_30504.value) > 0) ? Number(ecp_990204_30504.value) * -1 : Number(ecp_990204_30504.value) }
let convertirNegativo_990204_30601 = async id => { ecp_990204_30601.value = (Number(ecp_990204_30601.value) > 0) ? Number(ecp_990204_30601.value) * -1 : Number(ecp_990204_30601.value) }
let convertirNegativo_990204_30602 = async id => { ecp_990204_30602.value = (Number(ecp_990204_30602.value) > 0) ? Number(ecp_990204_30602.value) * -1 : Number(ecp_990204_30602.value) }
let convertirNegativo_990204_30603 = async id => { ecp_990204_30603.value = (Number(ecp_990204_30603.value) > 0) ? Number(ecp_990204_30603.value) * -1 : Number(ecp_990204_30603.value) }
let convertirNegativo_990204_30604 = async id => { ecp_990204_30604.value = (Number(ecp_990204_30604.value) > 0) ? Number(ecp_990204_30604.value) * -1 : Number(ecp_990204_30604.value) }
let convertirNegativo_990204_30605 = async id => { ecp_990204_30605.value = (Number(ecp_990204_30605.value) > 0) ? Number(ecp_990204_30605.value) * -1 : Number(ecp_990204_30605.value) }
let convertirNegativo_990204_30606 = async id => { ecp_990204_30606.value = (Number(ecp_990204_30606.value) > 0) ? Number(ecp_990204_30606.value) * -1 : Number(ecp_990204_30606.value) }
let convertirNegativo_990204_30607 = async id => { ecp_990204_30607.value = (Number(ecp_990204_30607.value) > 0) ? Number(ecp_990204_30607.value) * -1 : Number(ecp_990204_30607.value) }
let convertirNegativo_990204_30701 = async id => { ecp_990204_30701.value = (Number(ecp_990204_30701.value) > 0) ? Number(ecp_990204_30701.value) * -1 : Number(ecp_990204_30701.value) }
let convertirNegativo_990204_30702 = async id => { ecp_990204_30702.value = (Number(ecp_990204_30702.value) > 0) ? Number(ecp_990204_30702.value) * -1 : Number(ecp_990204_30702.value) }

let convertirNegativo_990204_30 = async id => { ecp_990204_30.value = (Number(ecp_990204_30.value) > 0) ? Number(ecp_990204_30.value) * -1 : Number(ecp_990204_30.value) }
let convertirNegativo_990204_31 = async id => { ecp_990204_31.value = (Number(ecp_990204_31.value) > 0) ? Number(ecp_990204_31.value) * -1 : Number(ecp_990204_31.value) }

let convertirNegativo_990101_30702 = async id => { ecp_990101_30702.value = (Number(ecp_990101_30702.value) > 0) ? Number(ecp_990101_30702.value) * -1 : Number(ecp_990101_30702.value) }
let convertirNegativo_990101_30602 = async id => { ecp_990101_30602.value = (Number(ecp_990101_30602.value) > 0) ? Number(ecp_990101_30602.value) * -1 : Number(ecp_990101_30602.value) }

let show_301 = ref(true)
let show_302 = ref(true)
let show_303 = ref(true)
let show_30401 = ref(true)
let show_30402 = ref(true)
let show_30501 = ref(true)
let show_30502 = ref(true)
let show_30503 = ref(true)
let show_30504 = ref(true)
let show_30601 = ref(true)
let show_30602 = ref(true)
let show_30603 = ref(true)
let show_30604 = ref(true)
let show_30605 = ref(true)
let show_30606 = ref(true)
let show_30607 = ref(true)
let show_30701 = ref(true)
let show_30702 = ref(true)
let show_30 = ref(true)
let show_31 = ref(true)

const estadoscambiosenpatrimonio = async id =>  {
  const ecp = {
    ecp_9901_301:	ecp_9901_301.value,
    ecp_9901_302:	ecp_9901_302.value,
    ecp_9901_303:	ecp_9901_303.value,
    ecp_9901_30401:	ecp_9901_30401.value,
    ecp_9901_30402:	ecp_9901_30402.value,
    ecp_9901_30501:	ecp_9901_30501.value,
    ecp_9901_30502:	ecp_9901_30502.value,
    ecp_9901_30503:	ecp_9901_30503.value,
    ecp_9901_30504:	ecp_9901_30504.value,
    ecp_9901_30601:	ecp_9901_30601.value,
    ecp_9901_30602:	ecp_9901_30602.value,
    ecp_9901_30603:	ecp_9901_30603.value,
    ecp_9901_30604:	ecp_9901_30604.value,
    ecp_9901_30605:	ecp_9901_30605.value,
    ecp_9901_30606:	ecp_9901_30606.value,
    ecp_9901_30607:	ecp_9901_30607.value,
    ecp_9901_30701:	ecp_9901_30701.value,
    ecp_9901_30702:	ecp_9901_30702.value,
    ecp_9901_30: ecp_9901_30.value,
    ecp_9901_31: ecp_9901_31.value,

    ecp_990101_301: ecp_990101_301.value,
    ecp_990101_302: ecp_990101_302.value,
    ecp_990101_303: ecp_990101_303.value,
    ecp_990101_30401: ecp_990101_30401.value,
    ecp_990101_30402: ecp_990101_30402.value,
    ecp_990101_30501: ecp_990101_30501.value,
    ecp_990101_30502: ecp_990101_30502.value,
    ecp_990101_30503: ecp_990101_30503.value,
    ecp_990101_30504: ecp_990101_30504.value,
    ecp_990101_30601: ecp_990101_30601.value,
    ecp_990101_30602: ecp_990101_30602.value,
    ecp_990101_30603: ecp_990101_30603.value,
    ecp_990101_30604: ecp_990101_30604.value,
    ecp_990101_30605: ecp_990101_30605.value,
    ecp_990101_30606: ecp_990101_30606.value,
    ecp_990101_30607: ecp_990101_30607.value,
    ecp_990101_30701: ecp_990101_30701.value,
    ecp_990101_30702: ecp_990101_30702.value,
    ecp_990101_30: ecp_990101_30.value,
    ecp_990101_31: ecp_990101_31.value,

    ecp_990102_301: ecp_990102_301.value,
    ecp_990102_302: ecp_990102_302.value,
    ecp_990102_303: ecp_990102_303.value,
    ecp_990102_30401: ecp_990102_30401.value,
    ecp_990102_30402: ecp_990102_30402.value,
    ecp_990102_30501: ecp_990102_30501.value,
    ecp_990102_30502: ecp_990102_30502.value,
    ecp_990102_30503: ecp_990102_30503.value,
    ecp_990102_30504: ecp_990102_30504.value,
    ecp_990102_30601: ecp_990102_30601.value,
    ecp_990102_30602: ecp_990102_30602.value,
    ecp_990102_30603: ecp_990102_30603.value,
    ecp_990102_30604: ecp_990102_30604.value,
    ecp_990102_30605: ecp_990102_30605.value,
    ecp_990102_30606: ecp_990102_30606.value,
    ecp_990102_30607: ecp_990102_30607.value,
    ecp_990102_30701: ecp_990102_30701.value,
    ecp_990102_30702: ecp_990102_30702.value,
    ecp_990102_30: ecp_990102_30.value,
    ecp_990102_31: ecp_990102_31.value,

    ecp_990103_301: ecp_990103_301.value,
    ecp_990103_302: ecp_990103_302.value,
    ecp_990103_303: ecp_990103_303.value,
    ecp_990103_30401: ecp_990103_30401.value,
    ecp_990103_30402: ecp_990103_30402.value,
    ecp_990103_30501: ecp_990103_30501.value,
    ecp_990103_30502: ecp_990103_30502.value,
    ecp_990103_30503: ecp_990103_30503.value,
    ecp_990103_30504: ecp_990103_30504.value,
    ecp_990103_30601: ecp_990103_30601.value,
    ecp_990103_30602: ecp_990103_30602.value,
    ecp_990103_30603: ecp_990103_30603.value,
    ecp_990103_30604: ecp_990103_30604.value,
    ecp_990103_30605: ecp_990103_30605.value,
    ecp_990103_30606: ecp_990103_30606.value,
    ecp_990103_30607: ecp_990103_30607.value,
    ecp_990103_30701: ecp_990103_30701.value,
    ecp_990103_30702: ecp_990103_30702.value,
    ecp_990103_30: ecp_990103_30.value,
    ecp_990103_31: ecp_990103_31.value,

    ecp_9902_301: ecp_9902_301.value,
    ecp_9902_302: ecp_9902_302.value,
    ecp_9902_303: ecp_9902_303.value,
    ecp_9902_30401: ecp_9902_30401.value,
    ecp_9902_30402: ecp_9902_30402.value,
    ecp_9902_30501: ecp_9902_30501.value,
    ecp_9902_30502: ecp_9902_30502.value,
    ecp_9902_30503: ecp_9902_30503.value,
    ecp_9902_30504: ecp_9902_30504.value,
    ecp_9902_30601: ecp_9902_30601.value,
    ecp_9902_30602: ecp_9902_30602.value,
    ecp_9902_30603: ecp_9902_30603.value,
    ecp_9902_30604: ecp_9902_30604.value,
    ecp_9902_30605: ecp_9902_30605.value,
    ecp_9902_30606: ecp_9902_30606.value,
    ecp_9902_30607: ecp_9902_30607.value,
    ecp_9902_30701: ecp_9902_30701.value,
    ecp_9902_30702: ecp_9902_30702.value,
    ecp_9902_30: ecp_9902_30.value,
    ecp_9902_31: ecp_9902_31.value,

    ecp_990201_301: ecp_990201_301.value,
    ecp_990201_302: ecp_990201_302.value,
    ecp_990201_303: ecp_990201_303.value,
    ecp_990201_30401: ecp_990201_30401.value,
    ecp_990201_30402: ecp_990201_30402.value,
    ecp_990201_30501: ecp_990201_30501.value,
    ecp_990201_30502: ecp_990201_30502.value,
    ecp_990201_30503: ecp_990201_30503.value,
    ecp_990201_30504: ecp_990201_30504.value,
    ecp_990201_30601: ecp_990201_30601.value,
    ecp_990201_30602: ecp_990201_30602.value,
    ecp_990201_30603: ecp_990201_30603.value,
    ecp_990201_30604: ecp_990201_30604.value,
    ecp_990201_30605: ecp_990201_30605.value,
    ecp_990201_30606: ecp_990201_30606.value,
    ecp_990201_30607: ecp_990201_30607.value,
    ecp_990201_30701: ecp_990201_30701.value,
    ecp_990201_30702: ecp_990201_30702.value,
    ecp_990201_30: ecp_990201_30.value,
    ecp_990201_31: ecp_990201_31.value,

    ecp_990202_301: ecp_990202_301.value,
    ecp_990202_302: ecp_990202_302.value,
    ecp_990202_303: ecp_990202_303.value,
    ecp_990202_30401: ecp_990202_30401.value,
    ecp_990202_30402: ecp_990202_30402.value,
    ecp_990202_30501: ecp_990202_30501.value,
    ecp_990202_30502: ecp_990202_30502.value,
    ecp_990202_30503: ecp_990202_30503.value,
    ecp_990202_30504: ecp_990202_30504.value,
    ecp_990202_30601: ecp_990202_30601.value,
    ecp_990202_30602: ecp_990202_30602.value,
    ecp_990202_30603: ecp_990202_30603.value,
    ecp_990202_30604: ecp_990202_30604.value,
    ecp_990202_30605: ecp_990202_30605.value,
    ecp_990202_30606: ecp_990202_30606.value,
    ecp_990202_30607: ecp_990202_30607.value,
    ecp_990202_30701: ecp_990202_30701.value,
    ecp_990202_30702: ecp_990202_30702.value,
    ecp_990202_30: ecp_990202_30.value,
    ecp_990202_31: ecp_990202_31.value,

    ecp_990203_301: ecp_990203_301.value,
    ecp_990203_302: ecp_990203_302.value,
    ecp_990203_303: ecp_990203_303.value,
    ecp_990203_30401: ecp_990203_30401.value,
    ecp_990203_30402: ecp_990203_30402.value,
    ecp_990203_30501: ecp_990203_30501.value,
    ecp_990203_30502: ecp_990203_30502.value,
    ecp_990203_30503: ecp_990203_30503.value,
    ecp_990203_30504: ecp_990203_30504.value,
    ecp_990203_30601: ecp_990203_30601.value,
    ecp_990203_30602: ecp_990203_30602.value,
    ecp_990203_30603: ecp_990203_30603.value,
    ecp_990203_30604: ecp_990203_30604.value,
    ecp_990203_30605: ecp_990203_30605.value,
    ecp_990203_30606: ecp_990203_30606.value,
    ecp_990203_30607: ecp_990203_30607.value,
    ecp_990203_30701: ecp_990203_30701.value,
    ecp_990203_30702: ecp_990203_30702.value,
    ecp_990203_30: ecp_990203_30.value,
    ecp_990203_31: ecp_990203_31.value,

    ecp_990204_301: ecp_990204_301.value,
    ecp_990204_302: ecp_990204_302.value,
    ecp_990204_303: ecp_990204_303.value,
    ecp_990204_30401: ecp_990204_30401.value,
    ecp_990204_30402: ecp_990204_30402.value,
    ecp_990204_30501: ecp_990204_30501.value,
    ecp_990204_30502: ecp_990204_30502.value,
    ecp_990204_30503: ecp_990204_30503.value,
    ecp_990204_30504: ecp_990204_30504.value,
    ecp_990204_30601: ecp_990204_30601.value,
    ecp_990204_30602: ecp_990204_30602.value,
    ecp_990204_30603: ecp_990204_30603.value,
    ecp_990204_30604: ecp_990204_30604.value,
    ecp_990204_30605: ecp_990204_30605.value,
    ecp_990204_30606: ecp_990204_30606.value,
    ecp_990204_30607: ecp_990204_30607.value,
    ecp_990204_30701: ecp_990204_30701.value,
    ecp_990204_30702: ecp_990204_30702.value,
    ecp_990204_30: ecp_990204_30.value,
    ecp_990204_31: ecp_990204_31.value,

    ecp_990205_301: ecp_990205_301.value,
    ecp_990205_302: ecp_990205_302.value,
    ecp_990205_303: ecp_990205_303.value,
    ecp_990205_30401: ecp_990205_30401.value,
    ecp_990205_30402: ecp_990205_30402.value,
    ecp_990205_30501: ecp_990205_30501.value,
    ecp_990205_30502: ecp_990205_30502.value,
    ecp_990205_30503: ecp_990205_30503.value,
    ecp_990205_30504: ecp_990205_30504.value,
    ecp_990205_30601: ecp_990205_30601.value,
    ecp_990205_30602: ecp_990205_30602.value,
    ecp_990205_30603: ecp_990205_30603.value,
    ecp_990205_30604: ecp_990205_30604.value,
    ecp_990205_30605: ecp_990205_30605.value,
    ecp_990205_30606: ecp_990205_30606.value,
    ecp_990205_30607: ecp_990205_30607.value,
    ecp_990205_30701: ecp_990205_30701.value,
    ecp_990205_30702: ecp_990205_30702.value,
    ecp_990205_30: ecp_990205_30.value,
    ecp_990205_31: ecp_990205_31.value,

    ecp_990206_301: ecp_990206_301.value,
    ecp_990206_302: ecp_990206_302.value,
    ecp_990206_303: ecp_990206_303.value,
    ecp_990206_30401: ecp_990206_30401.value,
    ecp_990206_30402: ecp_990206_30402.value,
    ecp_990206_30501: ecp_990206_30501.value,
    ecp_990206_30502: ecp_990206_30502.value,
    ecp_990206_30503: ecp_990206_30503.value,
    ecp_990206_30504: ecp_990206_30504.value,
    ecp_990206_30601: ecp_990206_30601.value,
    ecp_990206_30602: ecp_990206_30602.value,
    ecp_990206_30603: ecp_990206_30603.value,
    ecp_990206_30604: ecp_990206_30604.value,
    ecp_990206_30605: ecp_990206_30605.value,
    ecp_990206_30606: ecp_990206_30606.value,
    ecp_990206_30607: ecp_990206_30607.value,
    ecp_990206_30701: ecp_990206_30701.value,
    ecp_990206_30702: ecp_990206_30702.value,
    ecp_990206_30: ecp_990206_30.value,
    ecp_990206_31: ecp_990206_31.value,

    ecp_990207_301: ecp_990207_301.value,
    ecp_990207_302: ecp_990207_302.value,
    ecp_990207_303: ecp_990207_303.value,
    ecp_990207_30401: ecp_990207_30401.value,
    ecp_990207_30402: ecp_990207_30402.value,
    ecp_990207_30501: ecp_990207_30501.value,
    ecp_990207_30502: ecp_990207_30502.value,
    ecp_990207_30503: ecp_990207_30503.value,
    ecp_990207_30504: ecp_990207_30504.value,
    ecp_990207_30601: ecp_990207_30601.value,
    ecp_990207_30602: ecp_990207_30602.value,
    ecp_990207_30603: ecp_990207_30603.value,
    ecp_990207_30604: ecp_990207_30604.value,
    ecp_990207_30605: ecp_990207_30605.value,
    ecp_990207_30606: ecp_990207_30606.value,
    ecp_990207_30607: ecp_990207_30607.value,
    ecp_990207_30701: ecp_990207_30701.value,
    ecp_990207_30702: ecp_990207_30702.value,
    ecp_990207_30: ecp_990207_30.value,
    ecp_990207_31: ecp_990207_31.value,

    ecp_990208_301: ecp_990208_301.value,
    ecp_990208_302: ecp_990208_302.value,
    ecp_990208_303: ecp_990208_303.value,
    ecp_990208_30401: ecp_990208_30401.value,
    ecp_990208_30402: ecp_990208_30402.value,
    ecp_990208_30501: ecp_990208_30501.value,
    ecp_990208_30502: ecp_990208_30502.value,
    ecp_990208_30503: ecp_990208_30503.value,
    ecp_990208_30504: ecp_990208_30504.value,
    ecp_990208_30601: ecp_990208_30601.value,
    ecp_990208_30602: ecp_990208_30602.value,
    ecp_990208_30603: ecp_990208_30603.value,
    ecp_990208_30604: ecp_990208_30604.value,
    ecp_990208_30605: ecp_990208_30605.value,
    ecp_990208_30606: ecp_990208_30606.value,
    ecp_990208_30607: ecp_990208_30607.value,
    ecp_990208_30701: ecp_990208_30701.value,
    ecp_990208_30702: ecp_990208_30702.value,
    ecp_990208_30: ecp_990208_30.value,
    ecp_990208_31: ecp_990208_31.value,

    ecp_990209_301: ecp_990209_301.value,
    ecp_990209_302: ecp_990209_302.value,
    ecp_990209_303: ecp_990209_303.value,
    ecp_990209_30401: ecp_990209_30401.value,
    ecp_990209_30402: ecp_990209_30402.value,
    ecp_990209_30501: ecp_990209_30501.value,
    ecp_990209_30502: ecp_990209_30502.value,
    ecp_990209_30503: ecp_990209_30503.value,
    ecp_990209_30504: ecp_990209_30504.value,
    ecp_990209_30601: ecp_990209_30601.value,
    ecp_990209_30602: ecp_990209_30602.value,
    ecp_990209_30603: ecp_990209_30603.value,
    ecp_990209_30604: ecp_990209_30604.value,
    ecp_990209_30605: ecp_990209_30605.value,
    ecp_990209_30606: ecp_990209_30606.value,
    ecp_990209_30607: ecp_990209_30607.value,
    ecp_990209_30701: ecp_990209_30701.value,
    ecp_990209_30702: ecp_990209_30702.value,
    ecp_990209_30: ecp_990209_30.value,
    ecp_990209_31: ecp_990209_31.value,

    ecp_99020901_301: ecp_99020901_301.value,
    ecp_99020901_302: ecp_99020901_302.value,
    ecp_99020901_303: ecp_99020901_303.value,
    ecp_99020901_30401: ecp_99020901_30401.value,
    ecp_99020901_30402: ecp_99020901_30402.value,
    ecp_99020901_30501: ecp_99020901_30501.value,
    ecp_99020901_30502: ecp_99020901_30502.value,
    ecp_99020901_30503: ecp_99020901_30503.value,
    ecp_99020901_30504: ecp_99020901_30504.value,
    ecp_99020901_30601: ecp_99020901_30601.value,
    ecp_99020901_30602: ecp_99020901_30602.value,
    ecp_99020901_30603: ecp_99020901_30603.value,
    ecp_99020901_30604: ecp_99020901_30604.value,
    ecp_99020901_30605: ecp_99020901_30605.value,
    ecp_99020901_30606: ecp_99020901_30606.value,
    ecp_99020901_30607: ecp_99020901_30607.value,
    ecp_99020901_30701: ecp_99020901_30701.value,
    ecp_99020901_30702: ecp_99020901_30702.value,
    ecp_99020901_30: ecp_99020901_30.value,
    ecp_99020901_31: ecp_99020901_31.value,

    ecp_99020902_301: ecp_99020902_301.value,
    ecp_99020902_302: ecp_99020902_302.value,
    ecp_99020902_303: ecp_99020902_303.value,
    ecp_99020902_30401: ecp_99020902_30401.value,
    ecp_99020902_30402: ecp_99020902_30402.value,
    ecp_99020902_30501: ecp_99020902_30501.value,
    ecp_99020902_30502: ecp_99020902_30502.value,
    ecp_99020902_30503: ecp_99020902_30503.value,
    ecp_99020902_30504: ecp_99020902_30504.value,
    ecp_99020902_30601: ecp_99020902_30601.value,
    ecp_99020902_30602: ecp_99020902_30602.value,
    ecp_99020902_30603: ecp_99020902_30603.value,
    ecp_99020902_30604: ecp_99020902_30604.value,
    ecp_99020902_30605: ecp_99020902_30605.value,
    ecp_99020902_30606: ecp_99020902_30606.value,
    ecp_99020902_30607: ecp_99020902_30607.value,
    ecp_99020902_30701: ecp_99020902_30701.value,
    ecp_99020902_30702: ecp_99020902_30702.value,
    ecp_99020902_30: ecp_99020902_30.value,
    ecp_99020902_31: ecp_99020902_31.value,

    ecp_990210_301: ecp_990210_301.value,
    ecp_990210_302: ecp_990210_302.value,
    ecp_990210_303: ecp_990210_303.value,
    ecp_990210_30401: ecp_990210_30401.value,
    ecp_990210_30402: ecp_990210_30402.value,
    ecp_990210_30501: ecp_990210_30501.value,
    ecp_990210_30502: ecp_990210_30502.value,
    ecp_990210_30503: ecp_990210_30503.value,
    ecp_990210_30504: ecp_990210_30504.value,
    ecp_990210_30601: ecp_990210_30601.value,
    ecp_990210_30602: ecp_990210_30602.value,
    ecp_990210_30603: ecp_990210_30603.value,
    ecp_990210_30604: ecp_990210_30604.value,
    ecp_990210_30605: ecp_990210_30605.value,
    ecp_990210_30606: ecp_990210_30606.value,
    ecp_990210_30607: ecp_990210_30607.value,
    ecp_990210_30701: ecp_990210_30701.value,
    ecp_990210_30702: ecp_990210_30702.value,
    ecp_990210_30: ecp_990210_30.value,
    ecp_990210_31: ecp_990210_31.value,

    ecp_99_301: ecp_99_301.value,
    ecp_99_302: ecp_99_302.value,
    ecp_99_303: ecp_99_303.value,
    ecp_99_30401: ecp_99_30401.value,
    ecp_99_30402: ecp_99_30402.value,
    ecp_99_30501: ecp_99_30501.value,
    ecp_99_30502: ecp_99_30502.value,
    ecp_99_30503: ecp_99_30503.value,
    ecp_99_30504: ecp_99_30504.value,
    ecp_99_30601: ecp_99_30601.value,
    ecp_99_30602: ecp_99_30602.value,
    ecp_99_30603: ecp_99_30603.value,
    ecp_99_30604: ecp_99_30604.value,
    ecp_99_30605: ecp_99_30605.value,
    ecp_99_30606: ecp_99_30606.value,
    ecp_99_30607: ecp_99_30607.value,
    ecp_99_30701: ecp_99_30701.value,
    ecp_99_30702: ecp_99_30702.value,
    ecp_99_30: ecp_99_30.value,
    ecp_99_31: ecp_99_31.value,

    ecp_9901_Total: ecp_9901_Total.value,
    ecp_990101_Total: ecp_990101_Total.value,
    ecp_990102_Total: ecp_990102_Total.value,
    ecp_990103_Total: ecp_990103_Total.value,
    ecp_9902_Total: ecp_9902_Total.value,
    ecp_990201_Total: ecp_990201_Total.value,
    ecp_990202_Total: ecp_990202_Total.value,
    ecp_990203_Total: ecp_990203_Total.value,
    ecp_990204_Total: ecp_990204_Total.value,
    ecp_990205_Total: ecp_990205_Total.value,
    ecp_990206_Total: ecp_990206_Total.value,
    ecp_990207_Total: ecp_990207_Total.value,
    ecp_990208_Total: ecp_990208_Total.value,
    ecp_990209_Total: ecp_990209_Total.value,
    ecp_99020901_Total: ecp_99020901_Total.value,
    ecp_99020902_Total: ecp_99020902_Total.value,
    ecp_990210_Total: ecp_990210_Total.value,
    ecp_99_Total: ecp_99_Total.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    ecpifluc: ecp,
  })

  props.data.pat_99_301 = (typeof ecp_99_301.value === 'string') ? Number(ecp_99_301.value) : ecp_99_301.value
  props.data.pat_99_302 = (typeof ecp_99_302.value === 'string') ? Number(ecp_99_302.value) : ecp_99_302.value
  props.data.pat_99_303 = (typeof ecp_99_303.value === 'string') ? Number(ecp_99_303.value) : ecp_99_303.value
  props.data.pat_99_30401 = (typeof ecp_99_30401.value === 'string') ? Number(ecp_99_30401.value) : ecp_99_30401.value
  props.data.pat_99_30402 = (typeof ecp_99_30402.value === 'string') ? Number(ecp_99_30402.value) : ecp_99_30402.value
  props.data.pat_99_30501 = (typeof ecp_99_30501.value === 'string') ? Number(ecp_99_30501.value) : ecp_99_30501.value
  props.data.pat_99_30502 = (typeof ecp_99_30502.value === 'string') ? Number(ecp_99_30502.value) : ecp_99_30502.value
  props.data.pat_99_30503 = (typeof ecp_99_30503.value === 'string') ? Number(ecp_99_30503.value) : ecp_99_30503.value
  props.data.pat_99_30504 = (typeof ecp_99_30504.value === 'string') ? Number(ecp_99_30504.value) : ecp_99_30504.value
  props.data.pat_99_30601 = (typeof ecp_99_30601.value === 'string') ? Number(ecp_99_30601.value) : ecp_99_30601.value
  props.data.pat_99_30602 = (typeof ecp_99_30602.value === 'string') ? Number(ecp_99_30602.value) : ecp_99_30602.value
  props.data.pat_99_30603 = (typeof ecp_99_30603.value === 'string') ? Number(ecp_99_30603.value) : ecp_99_30603.value
  props.data.pat_99_30604 = (typeof ecp_99_30604.value === 'string') ? Number(ecp_99_30604.value) : ecp_99_30604.value
  props.data.pat_99_30605 = (typeof ecp_99_30605.value === 'string') ? Number(ecp_99_30605.value) : ecp_99_30605.value
  props.data.pat_99_30606 = (typeof ecp_99_30606.value === 'string') ? Number(ecp_99_30606.value) : ecp_99_30606.value
  props.data.pat_99_30607 = (typeof ecp_99_30607.value === 'string') ? Number(ecp_99_30607.value) : ecp_99_30607.value
  props.data.pat_99_30701 = (typeof ecp_99_30701.value === 'string') ? Number(ecp_99_30701.value) : ecp_99_30701.value
  props.data.pat_99_30702 = (typeof ecp_99_30702.value === 'string') ? Number(ecp_99_30702.value) : ecp_99_30702.value
  props.data.pat_99_30 = (typeof ecp_99_30.value === 'string') ? Number(ecp_99_30.value) : ecp_99_30.value
  props.data.pat_99_31 = (typeof ecp_99_31.value === 'string') ? Number(ecp_99_31.value) : ecp_99_31.value

  props.data.pat_9901_301 = (typeof ecp_9901_301.value === 'string') ? Number(ecp_9901_301.value) : ecp_9901_301.value
  props.data.pat_9901_302 = (typeof ecp_9901_302.value === 'string') ? Number(ecp_9901_302.value) : ecp_9901_302.value
  props.data.pat_9901_303 = (typeof ecp_9901_303.value === 'string') ? Number(ecp_9901_303.value) : ecp_9901_303.value
  props.data.pat_9901_30401 = (typeof ecp_9901_30401.value === 'string') ? Number(ecp_9901_30401.value) : ecp_9901_30401.value
  props.data.pat_9901_30402 = (typeof ecp_9901_30402.value === 'string') ? Number(ecp_9901_30402.value) : ecp_9901_30402.value
  props.data.pat_9901_30501 = (typeof ecp_9901_30501.value === 'string') ? Number(ecp_9901_30501.value) : ecp_9901_30501.value
  props.data.pat_9901_30502 = (typeof ecp_9901_30502.value === 'string') ? Number(ecp_9901_30502.value) : ecp_9901_30502.value
  props.data.pat_9901_30503 = (typeof ecp_9901_30503.value === 'string') ? Number(ecp_9901_30503.value) : ecp_9901_30503.value
  props.data.pat_9901_30504 = (typeof ecp_9901_30504.value === 'string') ? Number(ecp_9901_30504.value) : ecp_9901_30504.value
  props.data.pat_9901_30601 = (typeof ecp_9901_30601.value === 'string') ? Number(ecp_9901_30601.value) : ecp_9901_30601.value
  props.data.pat_9901_30602 = (typeof ecp_9901_30602.value === 'string') ? Number(ecp_9901_30602.value) : ecp_9901_30602.value
  props.data.pat_990101_30602 = (typeof ecp_990101_30602.value === 'string') ? Number(ecp_990101_30602.value) : ecp_990101_30602.value
  props.data.pat_9901_30603 = (typeof ecp_9901_30603.value === 'string') ? Number(ecp_9901_30603.value) : ecp_9901_30603.value
  props.data.pat_9901_30604 = (typeof ecp_9901_30604.value === 'string') ? Number(ecp_9901_30604.value) : ecp_9901_30604.value
  props.data.pat_9901_30605 = (typeof ecp_9901_30605.value === 'string') ? Number(ecp_9901_30605.value) : ecp_9901_30605.value
  props.data.pat_9901_30606 = (typeof ecp_9901_30606.value === 'string') ? Number(ecp_9901_30606.value) : ecp_9901_30606.value
  props.data.pat_9901_30607 = (typeof ecp_9901_30607.value === 'string') ? Number(ecp_9901_30607.value) : ecp_9901_30607.value
  props.data.pat_9901_30701 = (typeof ecp_9901_30701.value === 'string') ? Number(ecp_9901_30701.value) : ecp_9901_30701.value
  props.data.pat_9901_30702 = (typeof ecp_9901_30702.value === 'string') ? Number(ecp_9901_30702.value) : ecp_9901_30702.value
  props.data.pat_990101_30702 = (typeof ecp_990101_30702.value === 'string') ? Number(ecp_990101_30702.value) : ecp_990101_30702.value
  props.data.pat_9901_30 = (typeof ecp_9901_30.value === 'string') ? Number(ecp_9901_30.value) : ecp_9901_30.value
  props.data.pat_9901_31 = (typeof ecp_9901_31.value === 'string') ? Number(ecp_9901_31.value) : ecp_9901_31.value
}

const handleActionClick_301 = async id => {
  ecp_9901_301.value = (Number(ecp_990101_301.value) + Number(ecp_990102_301.value) + Number(ecp_990103_301.value)).toFixed(2)
  ecp_9902_301.value = (Number(ecp_990201_301.value) + Number(ecp_990202_301.value) + Number(ecp_990203_301.value) + Number(ecp_990204_301.value) + Number(ecp_990205_301.value) + Number(ecp_990206_301.value) + Number(ecp_990207_301.value) + Number(ecp_990208_301.value) + Number(ecp_990209_301.value) + Number(ecp_990210_301.value)).toFixed(2)
  ecp_99_301.value = (Number(ecp_9901_301.value) + Number(ecp_9902_301.value)).toFixed(2)

  ecp_9901_30.value = (Number(ecp_9901_301.value) + Number(ecp_9901_302.value) + Number(ecp_9901_303.value) + Number(ecp_9901_30401.value) + Number(ecp_9901_30402.value) + Number(ecp_9901_30501.value) + Number(ecp_9901_30502.value) + Number(ecp_9901_30503.value) + Number(ecp_9901_30504.value) + Number(ecp_9901_30601.value) + Number(ecp_9901_30602.value) + Number(ecp_9901_30603.value) + Number(ecp_9901_30604.value) + Number(ecp_9901_30605.value) + Number(ecp_9901_30606.value) + Number(ecp_9901_30607.value) + Number(ecp_9901_30701.value) + Number(ecp_9901_30702.value)).toFixed(2)
  ecp_9902_30.value = (Number(ecp_9902_301.value) + Number(ecp_9902_302.value) + Number(ecp_9902_303.value) + Number(ecp_9902_30401.value) + Number(ecp_9902_30402.value) + Number(ecp_9902_30501.value) + Number(ecp_9902_30502.value) + Number(ecp_9902_30503.value) + Number(ecp_9902_30504.value) + Number(ecp_9902_30601.value) + Number(ecp_9902_30602.value) + Number(ecp_9902_30603.value) + Number(ecp_9902_30604.value) + Number(ecp_9902_30605.value) + Number(ecp_9902_30606.value) + Number(ecp_9902_30607.value) + Number(ecp_9902_30701.value) + Number(ecp_9902_30702.value)).toFixed(2)
  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)


  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_301.value = ((ecp_9901_301.value) == 0 && (ecp_990101_301.value) == 0 && (ecp_990102_301.value) == 0 && (ecp_990103_301.value) == 0 && (ecp_9902_301.value) == 0 && (ecp_990201_301.value) == 0 && (ecp_990202_301.value) == 0 && (ecp_990203_301.value) == 0 && (ecp_990204_301.value) == 0 && (ecp_990205_301.value) == 0 && (ecp_990206_301.value) == 0 && (ecp_990207_301.value) == 0 && (ecp_990208_301.value) == 0 && (ecp_990209_301.value) == 0 && (ecp_99020901_301.value) == 0 && (ecp_99020902_301.value) == 0 && (ecp_990210_301.value) == 0 && (ecp_99_301.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_302 = async id => {
  ecp_9901_302.value = (Number(ecp_990101_302.value) + Number(ecp_990102_302.value) + Number(ecp_990103_302.value)).toFixed(2)
  ecp_9902_302.value = (Number(ecp_990201_302.value) + Number(ecp_990202_302.value) + Number(ecp_990203_302.value) + Number(ecp_990204_302.value) + Number(ecp_990205_302.value) + Number(ecp_990206_302.value) + Number(ecp_990207_302.value) + Number(ecp_990208_302.value) + Number(ecp_990209_302.value) + Number(ecp_990210_302.value)).toFixed(2)
  ecp_99_302.value = (Number(ecp_9901_302.value) + Number(ecp_9902_302.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)
  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_302.value = ((ecp_9901_302.value) == 0 && (ecp_990101_302.value) == 0 && (ecp_990102_302.value) == 0 && (ecp_990103_302.value) == 0 && (ecp_9902_302.value) == 0 && (ecp_990201_302.value) == 0 && (ecp_990202_302.value) == 0 && (ecp_990203_302.value) == 0 && (ecp_990204_302.value) == 0 && (ecp_990205_302.value) == 0 && (ecp_990206_302.value) == 0 && (ecp_990207_302.value) == 0 && (ecp_990208_302.value) == 0 && (ecp_990209_302.value) == 0 && (ecp_99020901_302.value) == 0 && (ecp_99020902_302.value) == 0 && (ecp_990210_302.value) == 0 && (ecp_99_302.value))


  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_303 = async id => {
  ecp_9901_303.value = (Number(ecp_990101_303.value) + Number(ecp_990102_303.value) + Number(ecp_990103_303.value)).toFixed(2)
  ecp_9902_303.value = (Number(ecp_990201_303.value) + Number(ecp_990202_303.value) + Number(ecp_990203_303.value) + Number(ecp_990204_303.value) + Number(ecp_990205_303.value) + Number(ecp_990206_303.value) + Number(ecp_990207_303.value) + Number(ecp_990208_303.value) + Number(ecp_990209_303.value) + Number(ecp_990210_303.value)).toFixed(2)
  ecp_99_303.value = (Number(ecp_9901_303.value) + Number(ecp_9902_303.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_303.value = ((ecp_9901_303.value) == 0 && (ecp_990101_303.value) == 0 && (ecp_990102_303.value) == 0 && (ecp_990103_303.value) == 0 && (ecp_9902_303.value) == 0 && (ecp_990201_303.value) == 0 && (ecp_990202_303.value) == 0 && (ecp_990203_303.value) == 0 && (ecp_990204_303.value) == 0 && (ecp_990205_303.value) == 0 && (ecp_990206_303.value) == 0 && (ecp_990207_303.value) == 0 && (ecp_990208_303.value) == 0 && (ecp_990209_303.value) == 0 && (ecp_99020901_303.value) == 0 && (ecp_99020902_303.value) == 0 && (ecp_990210_303.value) == 0 && (ecp_99_303.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_30401 = async id => {
  ecp_9901_30401.value = (Number(ecp_990101_30401.value) + Number(ecp_990102_30401.value) + Number(ecp_990103_30401.value)).toFixed(2)
  ecp_9902_30401.value = (Number(ecp_990201_30401.value) + Number(ecp_990202_30401.value) + Number(ecp_990203_30401.value) + Number(ecp_990204_30401.value) + Number(ecp_990205_30401.value) + Number(ecp_990206_30401.value) + Number(ecp_990207_30401.value) + Number(ecp_990208_30401.value) + Number(ecp_990209_30401.value) + Number(ecp_990210_30401.value)).toFixed(2)
  ecp_99_30401.value = (Number(ecp_9901_30401.value) + Number(ecp_9902_30401.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_30401.value = ((ecp_9901_30401.value) == 0 && (ecp_990101_30401.value) == 0 && (ecp_990102_30401.value) == 0 && (ecp_990103_30401.value) == 0 && (ecp_9902_30401.value) == 0 && (ecp_990201_30401.value) == 0 && (ecp_990202_30401.value) == 0 && (ecp_990203_30401.value) == 0 && (ecp_990204_30401.value) == 0 && (ecp_990205_30401.value) == 0 && (ecp_990206_30401.value) == 0 && (ecp_990207_30401.value) == 0 && (ecp_990208_30401.value) == 0 && (ecp_990209_30401.value) == 0 && (ecp_99020901_30401.value) == 0 && (ecp_99020902_30401.value) == 0 && (ecp_990210_30401.value) == 0 && (ecp_99_30401.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_30402 = async id => {
  ecp_9901_30402.value = (Number(ecp_990101_30402.value) + Number(ecp_990102_30402.value) + Number(ecp_990103_30402.value)).toFixed(2)
  ecp_9902_30402.value = (Number(ecp_990201_30402.value) + Number(ecp_990202_30402.value) + Number(ecp_990203_30402.value) + Number(ecp_990204_30402.value) + Number(ecp_990205_30402.value) + Number(ecp_990206_30402.value) + Number(ecp_990207_30402.value) + Number(ecp_990208_30402.value) + Number(ecp_990209_30402.value) + Number(ecp_990210_30402.value)).toFixed(2)
  ecp_99_30402.value = (Number(ecp_9901_30402.value) + Number(ecp_9902_30402.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_30402.value = ((ecp_9901_30402.value) == 0 && (ecp_990101_30402.value) == 0 && (ecp_990102_30402.value) == 0 && (ecp_990103_30402.value) == 0 && (ecp_9902_30402.value) == 0 && (ecp_990201_30402.value) == 0 && (ecp_990202_30402.value) == 0 && (ecp_990203_30402.value) == 0 && (ecp_990204_30402.value) == 0 && (ecp_990205_30402.value) == 0 && (ecp_990206_30402.value) == 0 && (ecp_990207_30402.value) == 0 && (ecp_990208_30402.value) == 0 && (ecp_990209_30402.value) == 0 && (ecp_99020901_30402.value) == 0 && (ecp_99020902_30402.value) == 0 && (ecp_990210_30402.value) == 0 && (ecp_99_30402.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_30501 = async id => {
  ecp_9901_30501.value = (Number(ecp_990101_30501.value) + Number(ecp_990102_30501.value) + Number(ecp_990103_30501.value)).toFixed(2)
  ecp_9902_30501.value = (Number(ecp_990201_30501.value) + Number(ecp_990202_30501.value) + Number(ecp_990203_30501.value) + Number(ecp_990204_30501.value) + Number(ecp_990205_30501.value) + Number(ecp_990206_30501.value) + Number(ecp_990207_30501.value) + Number(ecp_990208_30501.value) + Number(ecp_990209_30501.value) + Number(ecp_990210_30501.value)).toFixed(2)
  ecp_99_30501.value = (Number(ecp_9901_30501.value) + Number(ecp_9902_30501.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_30501.value = ((ecp_9901_30501.value) == 0 && (ecp_990101_30501.value) == 0 && (ecp_990102_30501.value) == 0 && (ecp_990103_30501.value) == 0 && (ecp_9902_30501.value) == 0 && (ecp_990201_30501.value) == 0 && (ecp_990202_30501.value) == 0 && (ecp_990203_30501.value) == 0 && (ecp_990204_30501.value) == 0 && (ecp_990205_30501.value) == 0 && (ecp_990206_30501.value) == 0 && (ecp_990207_30501.value) == 0 && (ecp_990208_30501.value) == 0 && (ecp_990209_30501.value) == 0 && (ecp_99020901_30501.value) == 0 && (ecp_99020902_30501.value) == 0 && (ecp_990210_30501.value) == 0 && (ecp_99_30501.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_30502 = async id => {
  ecp_9901_30502.value = (Number(ecp_990101_30502.value) + Number(ecp_990102_30502.value) + Number(ecp_990103_30502.value)).toFixed(2)
  ecp_9902_30502.value = (Number(ecp_990201_30502.value) + Number(ecp_990202_30502.value) + Number(ecp_990203_30502.value) + Number(ecp_990204_30502.value) + Number(ecp_990205_30502.value) + Number(ecp_990206_30502.value) + Number(ecp_990207_30502.value) + Number(ecp_990208_30502.value) + Number(ecp_990209_30502.value) + Number(ecp_990210_30502.value)).toFixed(2)
  ecp_99_30502.value = (Number(ecp_9901_30502.value) + Number(ecp_9902_30502.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_30502.value = ((ecp_9901_30502.value) == 0 && (ecp_990101_30502.value) == 0 && (ecp_990102_30502.value) == 0 && (ecp_990103_30502.value) == 0 && (ecp_9902_30502.value) == 0 && (ecp_990201_30502.value) == 0 && (ecp_990202_30502.value) == 0 && (ecp_990203_30502.value) == 0 && (ecp_990204_30502.value) == 0 && (ecp_990205_30502.value) == 0 && (ecp_990206_30502.value) == 0 && (ecp_990207_30502.value) == 0 && (ecp_990208_30502.value) == 0 && (ecp_990209_30502.value) == 0 && (ecp_99020901_30502.value) == 0 && (ecp_99020902_30502.value) == 0 && (ecp_990210_30502.value) == 0 && (ecp_99_30502.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_30503 = async id => {
  ecp_9901_30503.value = (Number(ecp_990101_30503.value) + Number(ecp_990102_30503.value) + Number(ecp_990103_30503.value)).toFixed(2)
  ecp_9902_30503.value = (Number(ecp_990201_30503.value) + Number(ecp_990202_30503.value) + Number(ecp_990203_30503.value) + Number(ecp_990204_30503.value) + Number(ecp_990205_30503.value) + Number(ecp_990206_30503.value) + Number(ecp_990207_30503.value) + Number(ecp_990208_30503.value) + Number(ecp_990209_30503.value) + Number(ecp_990210_30503.value)).toFixed(2)
  ecp_99_30503.value = (Number(ecp_9901_30503.value) + Number(ecp_9902_30503.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_30503.value = ((ecp_9901_30503.value) == 0 && (ecp_990101_30503.value) == 0 && (ecp_990102_30503.value) == 0 && (ecp_990103_30503.value) == 0 && (ecp_9902_30503.value) == 0 && (ecp_990201_30503.value) == 0 && (ecp_990202_30503.value) == 0 && (ecp_990203_30503.value) == 0 && (ecp_990204_30503.value) == 0 && (ecp_990205_30503.value) == 0 && (ecp_990206_30503.value) == 0 && (ecp_990207_30503.value) == 0 && (ecp_990208_30503.value) == 0 && (ecp_990209_30503.value) == 0 && (ecp_99020901_30503.value) == 0 && (ecp_99020902_30503.value) == 0 && (ecp_990210_30503.value) == 0 && (ecp_99_30503.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_30504 = async id => {
  ecp_9901_30504.value = (Number(ecp_990101_30504.value) + Number(ecp_990102_30504.value) + Number(ecp_990103_30504.value)).toFixed(2)
  ecp_9902_30504.value = (Number(ecp_990201_30504.value) + Number(ecp_990202_30504.value) + Number(ecp_990203_30504.value) + Number(ecp_990204_30504.value) + Number(ecp_990205_30504.value) + Number(ecp_990206_30504.value) + Number(ecp_990207_30504.value) + Number(ecp_990208_30504.value) + Number(ecp_990209_30504.value) + Number(ecp_990210_30504.value)).toFixed(2)
  ecp_99_30504.value = (Number(ecp_9901_30504.value) + Number(ecp_9902_30504.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_30504.value = ((ecp_9901_30504.value) == 0 && (ecp_990101_30504.value) == 0 && (ecp_990102_30504.value) == 0 && (ecp_990103_30504.value) == 0 && (ecp_9902_30504.value) == 0 && (ecp_990201_30504.value) == 0 && (ecp_990202_30504.value) == 0 && (ecp_990203_30504.value) == 0 && (ecp_990204_30504.value) == 0 && (ecp_990205_30504.value) == 0 && (ecp_990206_30504.value) == 0 && (ecp_990207_30504.value) == 0 && (ecp_990208_30504.value) == 0 && (ecp_990209_30504.value) == 0 && (ecp_99020901_30504.value) == 0 && (ecp_99020902_30504.value) == 0 && (ecp_990210_30504.value) == 0 && (ecp_99_30504.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_30601 = async id => {
  ecp_9901_30601.value = (Number(ecp_990101_30601.value) + Number(ecp_990102_30601.value) + Number(ecp_990103_30601.value)).toFixed(2)
  ecp_9902_30601.value = (Number(ecp_990201_30601.value) + Number(ecp_990202_30601.value) + Number(ecp_990203_30601.value) + Number(ecp_990204_30601.value) + Number(ecp_990205_30601.value) + Number(ecp_990206_30601.value) + Number(ecp_990207_30601.value) + Number(ecp_990208_30601.value) + Number(ecp_990209_30601.value) + Number(ecp_990210_30601.value)).toFixed(2)
  ecp_99_30601.value = (Number(ecp_9901_30601.value) + Number(ecp_9902_30601.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_30601.value = ((ecp_9901_30601.value) == 0 && (ecp_990101_30601.value) == 0 && (ecp_990102_30601.value) == 0 && (ecp_990103_30601.value) == 0 && (ecp_9902_30601.value) == 0 && (ecp_990201_30601.value) == 0 && (ecp_990202_30601.value) == 0 && (ecp_990203_30601.value) == 0 && (ecp_990204_30601.value) == 0 && (ecp_990205_30601.value) == 0 && (ecp_990206_30601.value) == 0 && (ecp_990207_30601.value) == 0 && (ecp_990208_30601.value) == 0 && (ecp_990209_30601.value) == 0 && (ecp_99020901_30601.value) == 0 && (ecp_99020902_30601.value) == 0 && (ecp_990210_30601.value) == 0 && (ecp_99_30601.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_30602 = async id => {
  ecp_9901_30602.value = (Number(ecp_990101_30602.value) + Number(ecp_990102_30602.value) + Number(ecp_990103_30602.value)).toFixed(2)
  ecp_9902_30602.value = (Number(ecp_990201_30602.value) + Number(ecp_990202_30602.value) + Number(ecp_990203_30602.value) + Number(ecp_990204_30602.value) + Number(ecp_990205_30602.value) + Number(ecp_990206_30602.value) + Number(ecp_990207_30602.value) + Number(ecp_990208_30602.value) + Number(ecp_990209_30602.value) + Number(ecp_990210_30602.value)).toFixed(2)
  ecp_99_30602.value = (Number(ecp_9901_30602.value) + Number(ecp_9902_30602.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_30602.value = ((ecp_9901_30601.value) == 0 && (ecp_990101_30601.value) == 0 && (ecp_990102_30601.value) == 0 && (ecp_990103_30601.value) == 0 && (ecp_9902_30601.value) == 0 && (ecp_990201_30601.value) == 0 && (ecp_990202_30601.value) == 0 && (ecp_990203_30601.value) == 0 && (ecp_990204_30601.value) == 0 && (ecp_990205_30601.value) == 0 && (ecp_990206_30601.value) == 0 && (ecp_990207_30601.value) == 0 && (ecp_990208_30601.value) == 0 && (ecp_990209_30601.value) == 0 && (ecp_99020901_30601.value) == 0 && (ecp_99020902_30601.value) == 0 && (ecp_990210_30601.value) == 0 && (ecp_99_30601.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_30603 = async id => {
  ecp_9901_30603.value = (Number(ecp_990101_30603.value) + Number(ecp_990102_30603.value) + Number(ecp_990103_30603.value)).toFixed(2)
  ecp_9902_30603.value = (Number(ecp_990201_30603.value) + Number(ecp_990202_30603.value) + Number(ecp_990203_30603.value) + Number(ecp_990204_30603.value) + Number(ecp_990205_30603.value) + Number(ecp_990206_30603.value) + Number(ecp_990207_30603.value) + Number(ecp_990208_30603.value) + Number(ecp_990209_30603.value) + Number(ecp_990210_30603.value)).toFixed(2)
  ecp_99_30603.value = (Number(ecp_9901_30603.value) + Number(ecp_9902_30603.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_30603.value = ((ecp_9901_30603.value) == 0 && (ecp_990101_30603.value) == 0 && (ecp_990102_30603.value) == 0 && (ecp_990103_30603.value) == 0 && (ecp_9902_30603.value) == 0 && (ecp_990201_30603.value) == 0 && (ecp_990202_30603.value) == 0 && (ecp_990203_30603.value) == 0 && (ecp_990204_30603.value) == 0 && (ecp_990205_30603.value) == 0 && (ecp_990206_30603.value) == 0 && (ecp_990207_30603.value) == 0 && (ecp_990208_30603.value) == 0 && (ecp_990209_30603.value) == 0 && (ecp_99020901_30603.value) == 0 && (ecp_99020902_30603.value) == 0 && (ecp_990210_30603.value) == 0 && (ecp_99_30603.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_30604 = async id => {
  ecp_9901_30604.value = (Number(ecp_990101_30604.value) + Number(ecp_990102_30604.value) + Number(ecp_990103_30604.value)).toFixed(2)
  ecp_9902_30604.value = (Number(ecp_990201_30604.value) + Number(ecp_990202_30604.value) + Number(ecp_990203_30604.value) + Number(ecp_990204_30604.value) + Number(ecp_990205_30604.value) + Number(ecp_990206_30604.value) + Number(ecp_990207_30604.value) + Number(ecp_990208_30604.value) + Number(ecp_990209_30604.value) + Number(ecp_990210_30604.value)).toFixed(2)
  ecp_99_30604.value = (Number(ecp_9901_30604.value) + Number(ecp_9902_30604.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_30604.value = ((ecp_9901_30604.value) == 0 && (ecp_990101_30604.value) == 0 && (ecp_990102_30604.value) == 0 && (ecp_990103_30604.value) == 0 && (ecp_9902_30604.value) == 0 && (ecp_990201_30604.value) == 0 && (ecp_990202_30604.value) == 0 && (ecp_990203_30604.value) == 0 && (ecp_990204_30604.value) == 0 && (ecp_990205_30604.value) == 0 && (ecp_990206_30604.value) == 0 && (ecp_990207_30604.value) == 0 && (ecp_990208_30604.value) == 0 && (ecp_990209_30604.value) == 0 && (ecp_99020901_30604.value) == 0 && (ecp_99020902_30604.value) == 0 && (ecp_990210_30604.value) == 0 && (ecp_99_30604.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_30605 = async id => {
  ecp_9901_30605.value = (Number(ecp_990101_30605.value) + Number(ecp_990102_30605.value) + Number(ecp_990103_30605.value)).toFixed(2)
  ecp_9902_30605.value = (Number(ecp_990201_30605.value) + Number(ecp_990202_30605.value) + Number(ecp_990203_30605.value) + Number(ecp_990204_30605.value) + Number(ecp_990205_30605.value) + Number(ecp_990206_30605.value) + Number(ecp_990207_30605.value) + Number(ecp_990208_30605.value) + Number(ecp_990209_30605.value) + Number(ecp_990210_30605.value)).toFixed(2)
  ecp_99_30605.value = (Number(ecp_9901_30605.value) + Number(ecp_9902_30605.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_30605.value = ((ecp_9901_30605.value) == 0 && (ecp_990101_30605.value) == 0 && (ecp_990102_30605.value) == 0 && (ecp_990103_30605.value) == 0 && (ecp_9902_30605.value) == 0 && (ecp_990201_30605.value) == 0 && (ecp_990202_30605.value) == 0 && (ecp_990203_30605.value) == 0 && (ecp_990204_30605.value) == 0 && (ecp_990205_30605.value) == 0 && (ecp_990206_30605.value) == 0 && (ecp_990207_30605.value) == 0 && (ecp_990208_30605.value) == 0 && (ecp_990209_30605.value) == 0 && (ecp_99020901_30605.value) == 0 && (ecp_99020902_30605.value) == 0 && (ecp_990210_30605.value) == 0 && (ecp_99_30605.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_30606 = async id => {
  ecp_9901_30606.value = (Number(ecp_990101_30606.value) + Number(ecp_990102_30606.value) + Number(ecp_990103_30606.value)).toFixed(2)
  ecp_9902_30606.value = (Number(ecp_990201_30606.value) + Number(ecp_990202_30606.value) + Number(ecp_990203_30606.value) + Number(ecp_990204_30606.value) + Number(ecp_990205_30606.value) + Number(ecp_990206_30606.value) + Number(ecp_990207_30606.value) + Number(ecp_990208_30606.value) + Number(ecp_990209_30606.value) + Number(ecp_990210_30606.value)).toFixed(2)
  ecp_99_30606.value = (Number(ecp_9901_30606.value) + Number(ecp_9902_30606.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)
  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_30606.value = ((ecp_9901_30606.value) == 0 && (ecp_990101_30606.value) == 0 && (ecp_990102_30606.value) == 0 && (ecp_990103_30606.value) == 0 && (ecp_9902_30606.value) == 0 && (ecp_990201_30606.value) == 0 && (ecp_990202_30606.value) == 0 && (ecp_990203_30606.value) == 0 && (ecp_990204_30606.value) == 0 && (ecp_990205_30606.value) == 0 && (ecp_990206_30606.value) == 0 && (ecp_990207_30606.value) == 0 && (ecp_990208_30606.value) == 0 && (ecp_990209_30606.value) == 0 && (ecp_99020901_30606.value) == 0 && (ecp_99020902_30606.value) == 0 && (ecp_990210_30606.value) == 0 && (ecp_99_30606.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_30607 = async id => {
  ecp_9901_30607.value = (Number(ecp_990101_30607.value) + Number(ecp_990102_30607.value) + Number(ecp_990103_30607.value)).toFixed(2)
  ecp_9902_30607.value = (Number(ecp_990201_30607.value) + Number(ecp_990202_30607.value) + Number(ecp_990203_30607.value) + Number(ecp_990204_30607.value) + Number(ecp_990205_30607.value) + Number(ecp_990206_30607.value) + Number(ecp_990207_30607.value) + Number(ecp_990208_30607.value) + Number(ecp_990209_30607.value) + Number(ecp_990210_30607.value)).toFixed(2)
  ecp_99_30607.value = (Number(ecp_9901_30607.value) + Number(ecp_9902_30607.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_30607.value = ((ecp_9901_30607.value) == 0 && (ecp_990101_30607.value) == 0 && (ecp_990102_30607.value) == 0 && (ecp_990103_30607.value) == 0 && (ecp_9902_30607.value) == 0 && (ecp_990201_30607.value) == 0 && (ecp_990202_30607.value) == 0 && (ecp_990203_30607.value) == 0 && (ecp_990204_30607.value) == 0 && (ecp_990205_30607.value) == 0 && (ecp_990206_30607.value) == 0 && (ecp_990207_30607.value) == 0 && (ecp_990208_30607.value) == 0 && (ecp_990209_30607.value) == 0 && (ecp_99020901_30607.value) == 0 && (ecp_99020902_30607.value) == 0 && (ecp_990210_30607.value) == 0 && (ecp_99_30607.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_30701 = async id => {
  ecp_9901_30701.value = (Number(ecp_990101_30701.value) + Number(ecp_990102_30701.value) + Number(ecp_990103_30701.value)).toFixed(2)
  ecp_9902_30701.value = (Number(ecp_990201_30701.value) + Number(ecp_990202_30701.value) + Number(ecp_990203_30701.value) + Number(ecp_990204_30701.value) + Number(ecp_990205_30701.value) + Number(ecp_990206_30701.value) + Number(ecp_990207_30701.value) + Number(ecp_990208_30701.value) + Number(ecp_990209_30701.value) + Number(ecp_990210_30701.value)).toFixed(2)
  ecp_99_30701.value = (Number(ecp_9901_30701.value) + Number(ecp_9902_30701.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_30701.value = ((ecp_9901_30701.value) == 0 && (ecp_990101_30701.value) == 0 && (ecp_990102_30701.value) == 0 && (ecp_990103_30701.value) == 0 && (ecp_9902_30701.value) == 0 && (ecp_990201_30701.value) == 0 && (ecp_990202_30701.value) == 0 && (ecp_990203_30701.value) == 0 && (ecp_990204_30701.value) == 0 && (ecp_990205_30701.value) == 0 && (ecp_990206_30701.value) == 0 && (ecp_990207_30701.value) == 0 && (ecp_990208_30701.value) == 0 && (ecp_990209_30701.value) == 0 && (ecp_99020901_30701.value) == 0 && (ecp_99020902_30701.value) == 0 && (ecp_990210_30701.value) == 0 && (ecp_99_30701.value))

  reportStore.updateReportData("ecpifluc", 'ecp_990210_30701', Number(ecp_990210_30701.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_30702 = async id => {
  ecp_9901_30702.value = (Number(ecp_990101_30702.value) + Number(ecp_990102_30702.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_9902_30702.value = (Number(ecp_990201_30702.value) + Number(ecp_990202_30702.value) + Number(ecp_990203_30702.value) + Number(ecp_990204_30702.value) + Number(ecp_990205_30702.value) + Number(ecp_990206_30702.value) + Number(ecp_990207_30702.value) + Number(ecp_990208_30702.value) + Number(ecp_990209_30702.value) + Number(ecp_990210_30702.value)).toFixed(2)
  ecp_99_30702.value = (Number(ecp_9901_30702.value) + Number(ecp_9902_30702.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_30702.value = ((ecp_9901_30702.value == 0) && (ecp_990101_30702.value == 0) && (ecp_990102_30702.value == 0) && (ecp_990103_30702.value == 0) && (ecp_9902_30702.value == 0) && (ecp_990201_30702.value == 0) && (ecp_990202_30702.value == 0) && (ecp_990203_30702.value == 0) && (ecp_990204_30702.value == 0) && (ecp_990205_30702.value == 0) && (ecp_990206_30702.value == 0) && (ecp_990207_30702.value == 0) && (ecp_990208_30702.value == 0) && (ecp_990209_30702.value == 0) && (ecp_99020901_30702.value == 0) && (ecp_99020902_30702.value == 0) && (ecp_990210_30702.value == 0) && ecp_99_30702.value)

  console.log('ecp_9901_30702', Number(ecp_9901_30702.value))
  console.log('ecp_990101_30702', Number(ecp_990101_30702.value))
  console.log('ecp_990102_30702', Number(ecp_990102_30702.value))
  console.log('ecp_990103_30702', Number(ecp_990103_30702.value))
  console.log('ecp_9902_30702', Number((ecp_9902_30702.value)))
  console.log('ecp_990201_30702', Number(ecp_990201_30702.value))
  console.log('ecp_990202_30702', Number(ecp_990202_30702.value))
  console.log('ecp_990203_30702', Number(ecp_990203_30702.value))
  console.log('ecp_990204_30702', Number(ecp_990204_30702.value))
  console.log('ecp_990205_30702', Number(ecp_990205_30702.value))
  console.log('ecp_990206_30702', Number(ecp_990206_30702.value))
  console.log('ecp_990207_30702', Number(ecp_990207_30702.value))
  console.log('ecp_990208_30702', Number(ecp_990208_30702.value))
  console.log('ecp_990209_30702', Number(ecp_990209_30702.value))
  console.log('ecp_99020901_30702', Number(ecp_99020901_30702.value))
  console.log('ecp_99020902_30702', Number(ecp_99020902_30702.value))
  console.log('ecp_990210_30702', Number(ecp_990210_30702.value))
  console.log('ecp_99_30702', Number(ecp_99_30702.value))

  console.log('show_30702', show_30702.value)
  console.log('show_302', show_302.value)
  console.log('show_303', show_303.value)
  console.log('show_30', show_30.value)
  console.log('show_31', show_31.value)

  reportStore.updateReportData("ecpifluc", 'ecp_990210_30702', Number(ecp_990210_30702.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_30 = async id => {
  ecp_9901_30.value = (Number(ecp_990101_30.value) + Number(ecp_990102_30.value) + Number(ecp_990103_30.value)).toFixed(2)
  ecp_9902_30.value = (Number(ecp_990201_30.value) + Number(ecp_990202_30702.value) + Number(ecp_990203_30.value) + Number(ecp_990204_30.value) + Number(ecp_990205_30.value) + Number(ecp_990206_30.value) + Number(ecp_990207_30.value) + Number(ecp_990208_30.value) + Number(ecp_990209_30.value) + Number(ecp_990210_30.value)).toFixed(2)
  ecp_99_30.value = (Number(ecp_9901_30.value) + Number(ecp_9902_30.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)

  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)
  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_30.value = ((ecp_9901_30.value) == 0 && (ecp_990101_30.value) == 0 && (ecp_990102_30.value) == 0 && (ecp_990103_30.value) == 0 && (ecp_9902_30.value) == 0 && (ecp_990201_30.value) == 0 && (ecp_990202_30.value) == 0 && (ecp_990203_30.value) == 0 && (ecp_990204_30.value) == 0 && (ecp_990205_30.value) == 0 && (ecp_990206_30.value) == 0 && (ecp_990207_30.value) == 0 && (ecp_990208_30.value) == 0 && (ecp_990209_30.value) == 0 && (ecp_99020901_30.value) == 0 && (ecp_99020902_30.value) == 0 && (ecp_990210_30.value) == 0 && (ecp_99_30.value))

  reportStore.updateReportData("ecpifluc", 'ecp_990210_30', Number(ecp_990210_30.value))

  console.log('ecp_9901_30', Number(ecp_9901_30.value))
  console.log('ecp_990101_30', Number(ecp_990101_30.value))
  console.log('ecp_990102_30', Number(ecp_990102_30.value))
  console.log('ecp_990103_30', Number(ecp_990103_30.value))
  console.log('ecp_9902_30', Number((ecp_9902_30.value)))
  console.log('ecp_990201_30', Number(ecp_990201_30.value))
  console.log('ecp_990202_30', Number(ecp_990202_30.value))
  console.log('ecp_990203_30', Number(ecp_990203_30.value))
  console.log('ecp_990204_30', Number(ecp_990204_30.value))
  console.log('ecp_990205_30', Number(ecp_990205_30.value))
  console.log('ecp_990206_30', Number(ecp_990206_30.value))
  console.log('ecp_990207_30', Number(ecp_990207_30.value))
  console.log('ecp_990208_30', Number(ecp_990208_30.value))
  console.log('ecp_990209_30', Number(ecp_990209_30.value))
  console.log('ecp_99020901_30', Number(ecp_99020901_30.value))
  console.log('ecp_99020902_30', Number(ecp_99020902_30.value))
  console.log('ecp_990210_30', Number(ecp_990210_30.value))
  console.log('ecp_99_30', Number(ecp_99_30.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}

const handleActionClick_31 = async id => {
  ecp_9901_31.value = (Number(ecp_990101_31.value) + Number(ecp_990102_31.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_9902_31.value = (Number(ecp_990201_31.value) + Number(ecp_990202_31.value) + Number(ecp_990203_31.value) + Number(ecp_990204_31.value) + Number(ecp_990205_31.value) + Number(ecp_990206_31.value) + Number(ecp_990207_31.value) + Number(ecp_990208_31.value) + Number(ecp_990209_31.value) + Number(ecp_990210_31.value)).toFixed(2)
  ecp_99_31.value = (Number(ecp_9901_31.value) + Number(ecp_9902_31.value)).toFixed(2)

  ecp_990101_30.value = (Number(ecp_990101_301.value) + Number(ecp_990101_302.value) + Number(ecp_990101_303.value) + Number(ecp_990101_30401.value) + Number(ecp_990101_30402.value) + Number(ecp_990101_30501.value) + Number(ecp_990101_30502.value) + Number(ecp_990101_30503.value) + Number(ecp_990101_30504.value) + Number(ecp_990101_30601.value) + Number(ecp_990101_30602.value) + Number(ecp_990101_30603.value) + Number(ecp_990101_30604.value) + Number(ecp_990101_30605.value) + Number(ecp_990101_30606.value) + Number(ecp_990101_30607.value) + Number(ecp_990101_30701.value) + Number(ecp_990101_30702.value)).toFixed(2)
  ecp_990102_30.value = (Number(ecp_990102_301.value) + Number(ecp_990102_302.value) + Number(ecp_990102_303.value) + Number(ecp_990102_30401.value) + Number(ecp_990102_30402.value) + Number(ecp_990102_30501.value) + Number(ecp_990102_30502.value) + Number(ecp_990102_30503.value) + Number(ecp_990102_30504.value) + Number(ecp_990102_30601.value) + Number(ecp_990102_30602.value) + Number(ecp_990102_30603.value) + Number(ecp_990102_30604.value) + Number(ecp_990102_30605.value) + Number(ecp_990102_30606.value) + Number(ecp_990102_30607.value) + Number(ecp_990102_30701.value) + Number(ecp_990102_30702.value)).toFixed(2)
  ecp_990103_30.value = (Number(ecp_990103_301.value) + Number(ecp_990103_302.value) + Number(ecp_990103_303.value) + Number(ecp_990103_30401.value) + Number(ecp_990103_30402.value) + Number(ecp_990103_30501.value) + Number(ecp_990103_30502.value) + Number(ecp_990103_30503.value) + Number(ecp_990103_30504.value) + Number(ecp_990103_30601.value) + Number(ecp_990103_30602.value) + Number(ecp_990103_30603.value) + Number(ecp_990103_30604.value) + Number(ecp_990103_30605.value) + Number(ecp_990103_30606.value) + Number(ecp_990103_30607.value) + Number(ecp_990103_30701.value) + Number(ecp_990103_30702.value)).toFixed(2)
  ecp_990201_30.value = (Number(ecp_990201_301.value) + Number(ecp_990201_302.value) + Number(ecp_990201_303.value) + Number(ecp_990201_30401.value) + Number(ecp_990201_30402.value) + Number(ecp_990201_30501.value) + Number(ecp_990201_30502.value) + Number(ecp_990201_30503.value) + Number(ecp_990201_30504.value) + Number(ecp_990201_30601.value) + Number(ecp_990201_30602.value) + Number(ecp_990201_30603.value) + Number(ecp_990201_30604.value) + Number(ecp_990201_30605.value) + Number(ecp_990201_30606.value) + Number(ecp_990201_30607.value) + Number(ecp_990201_30701.value) + Number(ecp_990201_30702.value)).toFixed(2)
  ecp_990202_30.value = (Number(ecp_990202_301.value) + Number(ecp_990202_302.value) + Number(ecp_990202_303.value) + Number(ecp_990202_30401.value) + Number(ecp_990202_30402.value) + Number(ecp_990202_30501.value) + Number(ecp_990202_30502.value) + Number(ecp_990202_30503.value) + Number(ecp_990202_30504.value) + Number(ecp_990202_30601.value) + Number(ecp_990202_30602.value) + Number(ecp_990202_30603.value) + Number(ecp_990202_30604.value) + Number(ecp_990202_30605.value) + Number(ecp_990202_30606.value) + Number(ecp_990202_30607.value) + Number(ecp_990202_30701.value) + Number(ecp_990202_30702.value)).toFixed(2)
  ecp_990203_30.value = (Number(ecp_990203_301.value) + Number(ecp_990203_302.value) + Number(ecp_990203_303.value) + Number(ecp_990203_30401.value) + Number(ecp_990203_30402.value) + Number(ecp_990203_30501.value) + Number(ecp_990203_30502.value) + Number(ecp_990203_30503.value) + Number(ecp_990203_30504.value) + Number(ecp_990203_30601.value) + Number(ecp_990203_30602.value) + Number(ecp_990203_30603.value) + Number(ecp_990203_30604.value) + Number(ecp_990203_30605.value) + Number(ecp_990203_30606.value) + Number(ecp_990203_30607.value) + Number(ecp_990203_30701.value) + Number(ecp_990203_30702.value)).toFixed(2)
  ecp_990204_30.value = (Number(ecp_990204_301.value) + Number(ecp_990204_302.value) + Number(ecp_990204_303.value) + Number(ecp_990204_30401.value) + Number(ecp_990204_30402.value) + Number(ecp_990204_30501.value) + Number(ecp_990204_30502.value) + Number(ecp_990204_30503.value) + Number(ecp_990204_30504.value) + Number(ecp_990204_30601.value) + Number(ecp_990204_30602.value) + Number(ecp_990204_30603.value) + Number(ecp_990204_30604.value) + Number(ecp_990204_30605.value) + Number(ecp_990204_30606.value) + Number(ecp_990204_30607.value) + Number(ecp_990204_30701.value) + Number(ecp_990204_30702.value)).toFixed(2)
  ecp_990205_30.value = (Number(ecp_990205_301.value) + Number(ecp_990205_302.value) + Number(ecp_990205_303.value) + Number(ecp_990205_30401.value) + Number(ecp_990205_30402.value) + Number(ecp_990205_30501.value) + Number(ecp_990205_30502.value) + Number(ecp_990205_30503.value) + Number(ecp_990205_30504.value) + Number(ecp_990205_30601.value) + Number(ecp_990205_30602.value) + Number(ecp_990205_30603.value) + Number(ecp_990205_30604.value) + Number(ecp_990205_30605.value) + Number(ecp_990205_30606.value) + Number(ecp_990205_30607.value) + Number(ecp_990205_30701.value) + Number(ecp_990205_30702.value)).toFixed(2)
  ecp_990206_30.value = (Number(ecp_990206_301.value) + Number(ecp_990206_302.value) + Number(ecp_990206_303.value) + Number(ecp_990206_30401.value) + Number(ecp_990206_30402.value) + Number(ecp_990206_30501.value) + Number(ecp_990206_30502.value) + Number(ecp_990206_30503.value) + Number(ecp_990206_30504.value) + Number(ecp_990206_30601.value) + Number(ecp_990206_30602.value) + Number(ecp_990206_30603.value) + Number(ecp_990206_30604.value) + Number(ecp_990206_30605.value) + Number(ecp_990206_30606.value) + Number(ecp_990206_30607.value) + Number(ecp_990206_30701.value) + Number(ecp_990206_30702.value)).toFixed(2)
  ecp_990207_30.value = (Number(ecp_990207_301.value) + Number(ecp_990207_302.value) + Number(ecp_990207_303.value) + Number(ecp_990207_30401.value) + Number(ecp_990207_30402.value) + Number(ecp_990207_30501.value) + Number(ecp_990207_30502.value) + Number(ecp_990207_30503.value) + Number(ecp_990207_30504.value) + Number(ecp_990207_30601.value) + Number(ecp_990207_30602.value) + Number(ecp_990207_30603.value) + Number(ecp_990207_30604.value) + Number(ecp_990207_30605.value) + Number(ecp_990207_30606.value) + Number(ecp_990207_30607.value) + Number(ecp_990207_30701.value) + Number(ecp_990207_30702.value)).toFixed(2)
  ecp_990208_30.value = (Number(ecp_990208_301.value) + Number(ecp_990208_302.value) + Number(ecp_990208_303.value) + Number(ecp_990208_30401.value) + Number(ecp_990208_30402.value) + Number(ecp_990208_30501.value) + Number(ecp_990208_30502.value) + Number(ecp_990208_30503.value) + Number(ecp_990208_30504.value) + Number(ecp_990208_30601.value) + Number(ecp_990208_30602.value) + Number(ecp_990208_30603.value) + Number(ecp_990208_30604.value) + Number(ecp_990208_30605.value) + Number(ecp_990208_30606.value) + Number(ecp_990208_30607.value) + Number(ecp_990208_30701.value) + Number(ecp_990208_30702.value)).toFixed(2)
  ecp_990209_30.value = (Number(ecp_990209_301.value) + Number(ecp_990209_302.value) + Number(ecp_990209_303.value) + Number(ecp_990209_30401.value) + Number(ecp_990209_30402.value) + Number(ecp_990209_30501.value) + Number(ecp_990209_30502.value) + Number(ecp_990209_30503.value) + Number(ecp_990209_30504.value) + Number(ecp_990209_30601.value) + Number(ecp_990209_30602.value) + Number(ecp_990209_30603.value) + Number(ecp_990209_30604.value) + Number(ecp_990209_30605.value) + Number(ecp_990209_30606.value) + Number(ecp_990209_30607.value) + Number(ecp_990209_30701.value) + Number(ecp_990209_30702.value)).toFixed(2)
  ecp_99020901_30.value = (Number(ecp_99020901_301.value) + Number(ecp_99020901_302.value) + Number(ecp_99020901_303.value) + Number(ecp_99020901_30401.value) + Number(ecp_99020901_30402.value) + Number(ecp_99020901_30501.value) + Number(ecp_99020901_30502.value) + Number(ecp_99020901_30503.value) + Number(ecp_99020901_30504.value) + Number(ecp_99020901_30601.value) + Number(ecp_99020901_30602.value) + Number(ecp_99020901_30603.value) + Number(ecp_99020901_30604.value) + Number(ecp_99020901_30605.value) + Number(ecp_99020901_30606.value) + Number(ecp_99020901_30607.value) + Number(ecp_99020901_30701.value) + Number(ecp_99020901_30702.value)).toFixed(2)
  ecp_99020902_30.value = (Number(ecp_99020902_301.value) + Number(ecp_99020902_302.value) + Number(ecp_99020902_303.value) + Number(ecp_99020902_30401.value) + Number(ecp_99020902_30402.value) + Number(ecp_99020902_30501.value) + Number(ecp_99020902_30502.value) + Number(ecp_99020902_30503.value) + Number(ecp_99020902_30504.value) + Number(ecp_99020902_30601.value) + Number(ecp_99020902_30602.value) + Number(ecp_99020902_30603.value) + Number(ecp_99020902_30604.value) + Number(ecp_99020902_30605.value) + Number(ecp_99020902_30606.value) + Number(ecp_99020902_30607.value) + Number(ecp_99020902_30701.value) + Number(ecp_99020902_30702.value)).toFixed(2)

  ecp_990210_30.value = (Number(ecp_990210_301.value) + Number(ecp_990210_302.value) + Number(ecp_990210_303.value) + Number(ecp_990210_30401.value) + Number(ecp_990210_30402.value) + Number(ecp_990210_30501.value) + Number(ecp_990210_30502.value) + Number(ecp_990210_30503.value) + Number(ecp_990210_30504.value) + Number(ecp_990210_30601.value) + Number(ecp_990210_30602.value) + Number(ecp_990210_30603.value) + Number(ecp_990210_30604.value) + Number(ecp_990210_30605.value) + Number(ecp_990210_30606.value) + Number(ecp_990210_30607.value) + Number(ecp_990210_30701.value) + Number(ecp_990210_30702.value)).toFixed(2)


  ecp_9901_Total.value = (Number(ecp_9901_30.value) + Number(ecp_9901_31.value)).toFixed(2)
  ecp_9902_Total.value = (Number(ecp_9902_30.value) + Number(ecp_9902_31.value)).toFixed(2)
  ecp_990101_Total.value = (Number(ecp_990101_30.value) + Number(ecp_990101_31.value)).toFixed(2)
  ecp_990102_Total.value = (Number(ecp_990102_30.value) + Number(ecp_990102_31.value)).toFixed(2)
  ecp_990103_Total.value = (Number(ecp_990103_30.value) + Number(ecp_990103_31.value)).toFixed(2)
  ecp_990201_Total.value = (Number(ecp_990201_30.value) + Number(ecp_990201_31.value)).toFixed(2)
  ecp_990202_Total.value = (Number(ecp_990202_30.value) + Number(ecp_990202_31.value)).toFixed(2)
  ecp_990203_Total.value = (Number(ecp_990203_30.value) + Number(ecp_990203_31.value)).toFixed(2)
  ecp_990204_Total.value = (Number(ecp_990204_30.value) + Number(ecp_990204_31.value)).toFixed(2)
  ecp_990205_Total.value = (Number(ecp_990205_30.value) + Number(ecp_990205_31.value)).toFixed(2)
  ecp_990206_Total.value = (Number(ecp_990206_30.value) + Number(ecp_990206_31.value)).toFixed(2)
  ecp_990207_Total.value = (Number(ecp_990207_30.value) + Number(ecp_990207_31.value)).toFixed(2)
  ecp_990208_Total.value = (Number(ecp_990208_30.value) + Number(ecp_990208_31.value)).toFixed(2)
  ecp_990209_Total.value = (Number(ecp_990209_30.value) + Number(ecp_990209_31.value)).toFixed(2)
  ecp_99020901_Total.value = (Number(ecp_99020901_30.value) + Number(ecp_99020901_31.value)).toFixed(2)
  ecp_99020902_Total.value = (Number(ecp_99020902_30.value) + Number(ecp_99020902_31.value)).toFixed(2)

  ecp_990210_Total.value = (Number(ecp_990210_30.value) + Number(ecp_990210_31.value)).toFixed(2)

  show_31.value = ((ecp_9901_31.value) == 0 && (ecp_990101_31.value) == 0 && (ecp_990102_31.value) == 0 && (ecp_990103_31.value) == 0 && (ecp_9902_31.value) == 0 && (ecp_990201_31.value) == 0 && (ecp_990202_31.value) == 0 && (ecp_990203_31.value) == 0 && (ecp_990204_31.value) == 0 && (ecp_990205_31.value) == 0 && (ecp_990206_31.value) == 0 && (ecp_990207_31.value) == 0 && (ecp_990208_31.value) == 0 && (ecp_990209_31.value) == 0 && (ecp_99020901_31.value) == 0 && (ecp_99020902_31.value) == 0 && (ecp_990210_31.value) == 0 && (ecp_99_31.value))

  reportStore.updateReportData("ecpifluc", 'ecp_990210_31', Number(ecp_990210_31.value))

  handleActionClick_Total(1)
  estadoscambiosenpatrimonio('1')
}


// INSERTAR NUEVAS COLUMNAS (2)
const handleActionClick_Total = async id => {
  ecp_9901_Total.value = (Number(ecp_990101_Total.value) + Number(ecp_990102_Total.value) + Number(ecp_990103_Total.value)).toFixed(2)
  ecp_9902_Total.value = (Number(ecp_990201_Total.value) + Number(ecp_990202_Total.value) + Number(ecp_990203_Total.value) + Number(ecp_990204_Total.value) + Number(ecp_990205_Total.value) + Number(ecp_990206_Total.value) + Number(ecp_990207_Total.value) + Number(ecp_990208_Total.value) + Number(ecp_990209_Total.value) + Number(ecp_990210_Total.value)).toFixed(2)
  ecp_99_Total.value = (Number(ecp_9901_Total.value) + Number(ecp_9902_Total.value)).toFixed(2)

  reportStore.updateReportData("ecpifluc", 'ecp_990201_301', Number(ecp_990201_301.value))
  reportStore.updateReportData("ecpifluc", 'ecp_990201_302', Number(ecp_990201_302.value))
  reportStore.updateReportData("ecpifluc", 'ecp_990202_301', Number(ecp_990202_301.value))
  reportStore.updateReportData("ecpifluc", 'ecp_990202_302', Number(ecp_990202_302.value))
  reportStore.updateReportData("ecpifluc", 'ecp_990201_Total', Number(ecp_990201_Total.value))
  reportStore.updateReportData("ecpifluc", 'ecp_99020901_Total', Number(ecp_99020901_Total.value))
}

const handleActionClick_Totalizar990209 = async id => {
  ecp_990209_301.value = Number(ecp_99020901_301.value) + Number(ecp_99020902_301.value)
  ecp_990209_302.value = Number(ecp_99020901_302.value) + Number(ecp_99020902_302.value)
  ecp_990209_303.value = Number(ecp_99020901_303.value) + Number(ecp_99020902_303.value)
  ecp_990209_30401.value = Number(ecp_99020901_30401.value) + Number(ecp_99020902_30401.value)
  ecp_990209_30402.value = Number(ecp_99020901_30402.value) + Number(ecp_99020902_30402.value)
  ecp_990209_30501.value = Number(ecp_99020901_30501.value) + Number(ecp_99020902_30501.value)
  ecp_990209_30502.value = Number(ecp_99020901_30502.value) + Number(ecp_99020902_30502.value)
  ecp_990209_30503.value = Number(ecp_99020901_30503.value) + Number(ecp_99020902_30503.value)
  ecp_990209_30504.value = Number(ecp_99020901_30504.value) + Number(ecp_99020902_30504.value)
  ecp_990209_30601.value = Number(ecp_99020901_30601.value) + Number(ecp_99020902_30601.value)
  ecp_990209_30602.value = Number(ecp_99020901_30602.value) + Number(ecp_99020902_30602.value)
  ecp_990209_30603.value = Number(ecp_99020901_30603.value) + Number(ecp_99020902_30603.value)
  ecp_990209_30604.value = Number(ecp_99020901_30604.value) + Number(ecp_99020902_30604.value)
  ecp_990209_30605.value = Number(ecp_99020901_30605.value) + Number(ecp_99020902_30605.value)
  ecp_990209_30606.value = Number(ecp_99020901_30606.value) + Number(ecp_99020902_30606.value)
  ecp_990209_30607.value = Number(ecp_99020901_30607.value) + Number(ecp_99020902_30607.value)
  ecp_990209_30701.value = Number(ecp_99020901_30701.value) + Number(ecp_99020902_30701.value)
  ecp_990209_30702.value = Number(ecp_99020901_30702.value) + Number(ecp_99020902_30702.value)
  ecp_990209_30.value = Number(ecp_99020901_30.value) + Number(ecp_99020902_30.value)
  ecp_990209_31.value = Number(ecp_99020901_31.value) + Number(ecp_99020902_31.value)
}


const showColumn = async id => {
  /* COLUMNA 1 */
  $("#th2_1").fadeIn()
  $("#th2_2").fadeIn()
  $("#th2_3").fadeIn()
  $("#th2_4").fadeIn()
  $("#th2_5").fadeIn()
  $("#th2_6").fadeIn()
  $("#th2_7").fadeIn()
  $("#th2_8").fadeIn()
  $("#th2_9").fadeIn()
  $("#th2_10").fadeIn()
  $("#th2_11").fadeIn()
  $("#th2_12").fadeIn()
  $("#th2_13").fadeIn()
  $("#th2_14").fadeIn()
  $("#th2_15").fadeIn()
  $("#th2_16").fadeIn()
  $("#th2_17").fadeIn()
  $("#th2_18").fadeIn()
  $("#th2_19").fadeIn()
  $("#th2_20").fadeIn()
  $("#th2_21").fadeIn()
  $("#th2_22").fadeIn()
  $("#th2_23").fadeIn()

  /* COLUMNA 2 */
  $("#th3_1").fadeIn()
  $("#th3_2").fadeIn()
  $("#th3_3").fadeIn()
  $("#th3_4").fadeIn()
  $("#th3_5").fadeIn()
  $("#th3_6").fadeIn()
  $("#th3_7").fadeIn()
  $("#th3_8").fadeIn()
  $("#th3_9").fadeIn()
  $("#th3_10").fadeIn()
  $("#th3_11").fadeIn()
  $("#th3_12").fadeIn()
  $("#th3_13").fadeIn()
  $("#th3_14").fadeIn()
  $("#th3_15").fadeIn()
  $("#th3_16").fadeIn()
  $("#th3_17").fadeIn()
  $("#th3_18").fadeIn()
  $("#th3_19").fadeIn()
  $("#th3_20").fadeIn()
  $("#th3_21").fadeIn()
  $("#th3_22").fadeIn()
  $("#th3_23").fadeIn()

  /* COLUMNA 3 */
  $("#th4_1").fadeIn()
  $("#th4_2").fadeIn()
  $("#th4_3").fadeIn()
  $("#th4_4").fadeIn()
  $("#th4_5").fadeIn()
  $("#th4_6").fadeIn()
  $("#th4_7").fadeIn()
  $("#th4_8").fadeIn()
  $("#th4_9").fadeIn()
  $("#th4_10").fadeIn()
  $("#th4_11").fadeIn()
  $("#th4_12").fadeIn()
  $("#th4_13").fadeIn()
  $("#th4_14").fadeIn()
  $("#th4_15").fadeIn()
  $("#th4_16").fadeIn()
  $("#th4_17").fadeIn()
  $("#th4_18").fadeIn()
  $("#th4_19").fadeIn()
  $("#th4_20").fadeIn()
  $("#th4_21").fadeIn()
  $("#th4_22").fadeIn()
  $("#th4_23").fadeIn()

  /* COLUMNA 4 */
  $("#th5_1").fadeIn()
  $("#th5_2").fadeIn()
  $("#th5_3").fadeIn()
  $("#th5_4").fadeIn()
  $("#th5_5").fadeIn()
  $("#th5_6").fadeIn()
  $("#th5_7").fadeIn()
  $("#th5_8").fadeIn()
  $("#th5_9").fadeIn()
  $("#th5_10").fadeIn()
  $("#th5_11").fadeIn()
  $("#th5_12").fadeIn()
  $("#th5_13").fadeIn()
  $("#th5_14").fadeIn()
  $("#th5_15").fadeIn()
  $("#th5_16").fadeIn()
  $("#th5_17").fadeIn()
  $("#th5_18").fadeIn()
  $("#th5_19").fadeIn()
  $("#th5_20").fadeIn()
  $("#th5_21").fadeIn()
  $("#th5_22").fadeIn()
  $("#th5_23").fadeIn()

  /* COLUMNA 5 */
  $("#th6_1").fadeIn()
  $("#th6_2").fadeIn()
  $("#th6_3").fadeIn()
  $("#th6_4").fadeIn()
  $("#th6_5").fadeIn()
  $("#th6_6").fadeIn()
  $("#th6_7").fadeIn()
  $("#th6_8").fadeIn()
  $("#th6_9").fadeIn()
  $("#th6_10").fadeIn()
  $("#th6_11").fadeIn()
  $("#th6_12").fadeIn()
  $("#th6_13").fadeIn()
  $("#th6_14").fadeIn()
  $("#th6_15").fadeIn()
  $("#th6_16").fadeIn()
  $("#th6_17").fadeIn()
  $("#th6_18").fadeIn()
  $("#th6_19").fadeIn()
  $("#th6_20").fadeIn()
  $("#th6_21").fadeIn()
  $("#th6_22").fadeIn()
  $("#th6_23").fadeIn()

  /* COLUMNA 6 */
  $("#th7_1").fadeIn()
  $("#th7_2").fadeIn()
  $("#th7_3").fadeIn()
  $("#th7_4").fadeIn()
  $("#th7_5").fadeIn()
  $("#th7_6").fadeIn()
  $("#th7_7").fadeIn()
  $("#th7_8").fadeIn()
  $("#th7_9").fadeIn()
  $("#th7_10").fadeIn()
  $("#th7_11").fadeIn()
  $("#th7_12").fadeIn()
  $("#th7_13").fadeIn()
  $("#th7_14").fadeIn()
  $("#th7_15").fadeIn()
  $("#th7_16").fadeIn()
  $("#th7_17").fadeIn()
  $("#th7_18").fadeIn()
  $("#th7_19").fadeIn()
  $("#th7_20").fadeIn()
  $("#th7_21").fadeIn()
  $("#th7_22").fadeIn()
  $("#th7_23").fadeIn()

  /* COLUMNA 7 */
  $("#th8_1").fadeIn()
  $("#th8_2").fadeIn()
  $("#th8_3").fadeIn()
  $("#th8_4").fadeIn()
  $("#th8_5").fadeIn()
  $("#th8_6").fadeIn()
  $("#th8_7").fadeIn()
  $("#th8_8").fadeIn()
  $("#th8_9").fadeIn()
  $("#th8_10").fadeIn()
  $("#th8_11").fadeIn()
  $("#th8_12").fadeIn()
  $("#th8_13").fadeIn()
  $("#th8_14").fadeIn()
  $("#th8_15").fadeIn()
  $("#th8_16").fadeIn()
  $("#th8_17").fadeIn()
  $("#th8_18").fadeIn()
  $("#th8_19").fadeIn()
  $("#th8_20").fadeIn()
  $("#th8_21").fadeIn()
  $("#th8_22").fadeIn()
  $("#th8_23").fadeIn()

  /* COLUMNA 8 */
  $("#th9_1").fadeIn()
  $("#th9_2").fadeIn()
  $("#th9_3").fadeIn()
  $("#th9_4").fadeIn()
  $("#th9_5").fadeIn()
  $("#th9_6").fadeIn()
  $("#th9_7").fadeIn()
  $("#th9_8").fadeIn()
  $("#th9_9").fadeIn()
  $("#th9_10").fadeIn()
  $("#th9_11").fadeIn()
  $("#th9_12").fadeIn()
  $("#th9_13").fadeIn()
  $("#th9_14").fadeIn()
  $("#th9_15").fadeIn()
  $("#th9_16").fadeIn()
  $("#th9_17").fadeIn()
  $("#th9_18").fadeIn()
  $("#th9_19").fadeIn()
  $("#th9_20").fadeIn()
  $("#th9_21").fadeIn()
  $("#th9_22").fadeIn()
  $("#th9_23").fadeIn()

  /* COLUMNA 9 */
  $("#th10_1").fadeIn()
  $("#th10_2").fadeIn()
  $("#th10_3").fadeIn()
  $("#th10_4").fadeIn()
  $("#th10_5").fadeIn()
  $("#th10_6").fadeIn()
  $("#th10_7").fadeIn()
  $("#th10_8").fadeIn()
  $("#th10_9").fadeIn()
  $("#th10_10").fadeIn()
  $("#th10_11").fadeIn()
  $("#th10_12").fadeIn()
  $("#th10_13").fadeIn()
  $("#th10_14").fadeIn()
  $("#th10_15").fadeIn()
  $("#th10_16").fadeIn()
  $("#th10_17").fadeIn()
  $("#th10_18").fadeIn()
  $("#th10_19").fadeIn()
  $("#th10_20").fadeIn()
  $("#th10_21").fadeIn()
  $("#th10_22").fadeIn()
  $("#th10_23").fadeIn()

  /* COLUMNA 10 */
  $("#th11_1").fadeIn()
  $("#th11_2").fadeIn()
  $("#th11_3").fadeIn()
  $("#th11_4").fadeIn()
  $("#th11_5").fadeIn()
  $("#th11_6").fadeIn()
  $("#th11_7").fadeIn()
  $("#th11_8").fadeIn()
  $("#th11_9").fadeIn()
  $("#th11_10").fadeIn()
  $("#th11_11").fadeIn()
  $("#th11_12").fadeIn()
  $("#th11_13").fadeIn()
  $("#th11_14").fadeIn()
  $("#th11_15").fadeIn()
  $("#th11_16").fadeIn()
  $("#th11_17").fadeIn()
  $("#th11_18").fadeIn()
  $("#th11_19").fadeIn()
  $("#th11_20").fadeIn()
  $("#th11_21").fadeIn()
  $("#th11_22").fadeIn()
  $("#th11_23").fadeIn()

  /* COLUMNA 11 */
  $("#th12_1").fadeIn()
  $("#th12_2").fadeIn()
  $("#th12_3").fadeIn()
  $("#th12_4").fadeIn()
  $("#th12_5").fadeIn()
  $("#th12_6").fadeIn()
  $("#th12_7").fadeIn()
  $("#th12_8").fadeIn()
  $("#th12_9").fadeIn()
  $("#th12_10").fadeIn()
  $("#th12_11").fadeIn()
  $("#th12_12").fadeIn()
  $("#th12_13").fadeIn()
  $("#th12_14").fadeIn()
  $("#th12_15").fadeIn()
  $("#th12_16").fadeIn()
  $("#th12_17").fadeIn()
  $("#th12_18").fadeIn()
  $("#th12_19").fadeIn()
  $("#th12_20").fadeIn()
  $("#th12_21").fadeIn()
  $("#th12_22").fadeIn()
  $("#th12_23").fadeIn()

  /* COLUMNA 12 */
  $("#th13_1").fadeIn()
  $("#th13_2").fadeIn()
  $("#th13_3").fadeIn()
  $("#th13_4").fadeIn()
  $("#th13_5").fadeIn()
  $("#th13_6").fadeIn()
  $("#th13_7").fadeIn()
  $("#th13_8").fadeIn()
  $("#th13_9").fadeIn()
  $("#th13_10").fadeIn()
  $("#th13_11").fadeIn()
  $("#th13_12").fadeIn()
  $("#th13_13").fadeIn()
  $("#th13_14").fadeIn()
  $("#th13_15").fadeIn()
  $("#th13_16").fadeIn()
  $("#th13_17").fadeIn()
  $("#th13_18").fadeIn()
  $("#th13_19").fadeIn()
  $("#th13_20").fadeIn()
  $("#th13_21").fadeIn()
  $("#th13_22").fadeIn()
  $("#th13_23").fadeIn()

  /* COLUMNA 13 */
  $("#th14_1").fadeIn()
  $("#th14_2").fadeIn()
  $("#th14_3").fadeIn()
  $("#th14_4").fadeIn()
  $("#th14_5").fadeIn()
  $("#th14_6").fadeIn()
  $("#th14_7").fadeIn()
  $("#th14_8").fadeIn()
  $("#th14_9").fadeIn()
  $("#th14_10").fadeIn()
  $("#th14_11").fadeIn()
  $("#th14_12").fadeIn()
  $("#th14_13").fadeIn()
  $("#th14_14").fadeIn()
  $("#th14_15").fadeIn()
  $("#th14_16").fadeIn()
  $("#th14_17").fadeIn()
  $("#th14_18").fadeIn()
  $("#th14_19").fadeIn()
  $("#th14_20").fadeIn()
  $("#th14_21").fadeIn()
  $("#th14_22").fadeIn()
  $("#th14_23").fadeIn()

  /* COLUMNA 14 */
  $("#th15_1").fadeIn()
  $("#th15_2").fadeIn()
  $("#th15_3").fadeIn()
  $("#th15_4").fadeIn()
  $("#th15_5").fadeIn()
  $("#th15_6").fadeIn()
  $("#th15_7").fadeIn()
  $("#th15_8").fadeIn()
  $("#th15_9").fadeIn()
  $("#th15_10").fadeIn()
  $("#th15_11").fadeIn()
  $("#th15_12").fadeIn()
  $("#th15_13").fadeIn()
  $("#th15_14").fadeIn()
  $("#th15_15").fadeIn()
  $("#th15_16").fadeIn()
  $("#th15_17").fadeIn()
  $("#th15_18").fadeIn()
  $("#th15_19").fadeIn()
  $("#th15_20").fadeIn()
  $("#th15_21").fadeIn()
  $("#th15_22").fadeIn()
  $("#th15_23").fadeIn()

  /* COLUMNA 15 */
  $("#th16_1").fadeIn()
  $("#th16_2").fadeIn()
  $("#th16_3").fadeIn()
  $("#th16_4").fadeIn()
  $("#th16_5").fadeIn()
  $("#th16_6").fadeIn()
  $("#th16_7").fadeIn()
  $("#th16_8").fadeIn()
  $("#th16_9").fadeIn()
  $("#th16_10").fadeIn()
  $("#th16_11").fadeIn()
  $("#th16_12").fadeIn()
  $("#th16_13").fadeIn()
  $("#th16_14").fadeIn()
  $("#th16_15").fadeIn()
  $("#th16_16").fadeIn()
  $("#th16_17").fadeIn()
  $("#th16_18").fadeIn()
  $("#th16_19").fadeIn()
  $("#th16_20").fadeIn()
  $("#th16_21").fadeIn()
  $("#th16_22").fadeIn()
  $("#th16_23").fadeIn()

  /* COLUMNA 16 */
  $("#th17_1").fadeIn()
  $("#th17_2").fadeIn()
  $("#th17_3").fadeIn()
  $("#th17_4").fadeIn()
  $("#th17_5").fadeIn()
  $("#th17_6").fadeIn()
  $("#th17_7").fadeIn()
  $("#th17_8").fadeIn()
  $("#th17_9").fadeIn()
  $("#th17_10").fadeIn()
  $("#th17_11").fadeIn()
  $("#th17_12").fadeIn()
  $("#th17_13").fadeIn()
  $("#th17_14").fadeIn()
  $("#th17_15").fadeIn()
  $("#th17_16").fadeIn()
  $("#th17_17").fadeIn()
  $("#th17_18").fadeIn()
  $("#th17_19").fadeIn()
  $("#th17_20").fadeIn()
  $("#th17_21").fadeIn()
  $("#th17_22").fadeIn()
  $("#th17_23").fadeIn()

  /* COLUMNA 17 */
  $("#th18_1").fadeIn()
  $("#th18_2").fadeIn()
  $("#th18_3").fadeIn()
  $("#th18_4").fadeIn()
  $("#th18_5").fadeIn()
  $("#th18_6").fadeIn()
  $("#th18_7").fadeIn()
  $("#th18_8").fadeIn()
  $("#th18_9").fadeIn()
  $("#th18_10").fadeIn()
  $("#th18_11").fadeIn()
  $("#th18_12").fadeIn()
  $("#th18_13").fadeIn()
  $("#th18_14").fadeIn()
  $("#th18_15").fadeIn()
  $("#th18_16").fadeIn()
  $("#th18_17").fadeIn()
  $("#th18_18").fadeIn()
  $("#th18_19").fadeIn()
  $("#th18_20").fadeIn()
  $("#th18_21").fadeIn()
  $("#th18_22").fadeIn()
  $("#th18_23").fadeIn()

  /* COLUMNA 18 */
  $("#th19_1").fadeIn()
  $("#th19_2").fadeIn()
  $("#th19_3").fadeIn()
  $("#th19_4").fadeIn()
  $("#th19_5").fadeIn()
  $("#th19_6").fadeIn()
  $("#th19_7").fadeIn()
  $("#th19_8").fadeIn()
  $("#th19_9").fadeIn()
  $("#th19_10").fadeIn()
  $("#th19_11").fadeIn()
  $("#th19_12").fadeIn()
  $("#th19_13").fadeIn()
  $("#th19_14").fadeIn()
  $("#th19_15").fadeIn()
  $("#th19_16").fadeIn()
  $("#th19_17").fadeIn()
  $("#th19_18").fadeIn()
  $("#th19_19").fadeIn()
  $("#th19_20").fadeIn()
  $("#th19_21").fadeIn()
  $("#th19_22").fadeIn()
  $("#th19_23").fadeIn()

  /* COLUMNA 19 */
  $("#th20_1").fadeIn()
  $("#th20_2").fadeIn()
  $("#th20_3").fadeIn()
  $("#th20_4").fadeIn()
  $("#th20_5").fadeIn()
  $("#th20_6").fadeIn()
  $("#th20_7").fadeIn()
  $("#th20_8").fadeIn()
  $("#th20_9").fadeIn()
  $("#th20_10").fadeIn()
  $("#th20_11").fadeIn()
  $("#th20_12").fadeIn()
  $("#th20_13").fadeIn()
  $("#th20_14").fadeIn()
  $("#th20_15").fadeIn()
  $("#th20_16").fadeIn()
  $("#th20_17").fadeIn()
  $("#th20_18").fadeIn()
  $("#th20_19").fadeIn()
  $("#th20_20").fadeIn()
  $("#th20_21").fadeIn()
  $("#th20_22").fadeIn()
  $("#th20_23").fadeIn()

  /* COLUMNA 20 */
  $("#th21_1").fadeIn()
  $("#th21_2").fadeIn()
  $("#th21_3").fadeIn()
  $("#th21_4").fadeIn()
  $("#th21_5").fadeIn()
  $("#th21_6").fadeIn()
  $("#th21_7").fadeIn()
  $("#th21_8").fadeIn()
  $("#th21_9").fadeIn()
  $("#th21_10").fadeIn()
  $("#th21_11").fadeIn()
  $("#th21_12").fadeIn()
  $("#th21_13").fadeIn()
  $("#th21_14").fadeIn()
  $("#th21_15").fadeIn()
  $("#th21_16").fadeIn()
  $("#th21_17").fadeIn()
  $("#th21_18").fadeIn()
  $("#th21_19").fadeIn()
  $("#th21_20").fadeIn()
  $("#th21_21").fadeIn()
  $("#th21_22").fadeIn()
  $("#th21_23").fadeIn()

  /* COLUMNA 21 */
  $("#th22_1").fadeIn()
  $("#th22_2").fadeIn()
  $("#th22_3").fadeIn()
  $("#th22_4").fadeIn()
  $("#th22_5").fadeIn()
  $("#th22_6").fadeIn()
  $("#th22_7").fadeIn()
  $("#th22_8").fadeIn()
  $("#th22_9").fadeIn()
  $("#th22_10").fadeIn()
  $("#th22_11").fadeIn()
  $("#th22_12").fadeIn()
  $("#th22_13").fadeIn()
  $("#th22_14").fadeIn()
  $("#th22_15").fadeIn()
  $("#th22_16").fadeIn()
  $("#th22_17").fadeIn()
  $("#th22_18").fadeIn()
  $("#th22_19").fadeIn()
  $("#th22_20").fadeIn()
  $("#th22_21").fadeIn()
  $("#th22_22").fadeIn()
  $("#th22_23").fadeIn()

  $("#th2_0").css('display', 'none')
}

const hideColumnOne = async id => {
  $("#th2_1").fadeOut()
  $("#th2_2").fadeOut()
  $("#th2_3").fadeOut()
  $("#th2_4").fadeOut()
  $("#th2_5").fadeOut()
  $("#th2_6").fadeOut()
  $("#th2_7").fadeOut()
  $("#th2_8").fadeOut()
  $("#th2_9").fadeOut()
  $("#th2_10").fadeOut()
  $("#th2_11").fadeOut()
  $("#th2_12").fadeOut()
  $("#th2_13").fadeOut()
  $("#th2_14").fadeOut()
  $("#th2_15").fadeOut()
  $("#th2_16").fadeOut()
  $("#th2_17").fadeOut()
  $("#th2_18").fadeOut()
  $("#th2_19").fadeOut()
  $("#th2_20").fadeOut()
  $("#th2_21").fadeOut()
  $("#th2_22").fadeOut()
  $("#th2_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnTwo = async id => {
  $("#th3_1").fadeOut()
  $("#th3_2").fadeOut()
  $("#th3_3").fadeOut()
  $("#th3_4").fadeOut()
  $("#th3_5").fadeOut()
  $("#th3_6").fadeOut()
  $("#th3_7").fadeOut()
  $("#th3_8").fadeOut()
  $("#th3_9").fadeOut()
  $("#th3_10").fadeOut()
  $("#th3_11").fadeOut()
  $("#th3_12").fadeOut()
  $("#th3_13").fadeOut()
  $("#th3_14").fadeOut()
  $("#th3_15").fadeOut()
  $("#th3_16").fadeOut()
  $("#th3_17").fadeOut()
  $("#th3_18").fadeOut()
  $("#th3_19").fadeOut()
  $("#th3_20").fadeOut()
  $("#th3_21").fadeOut()
  $("#th3_22").fadeOut()
  $("#th3_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnThree = async id => {
  $("#th4_1").fadeOut()
  $("#th4_2").fadeOut()
  $("#th4_3").fadeOut()
  $("#th4_4").fadeOut()
  $("#th4_5").fadeOut()
  $("#th4_6").fadeOut()
  $("#th4_7").fadeOut()
  $("#th4_8").fadeOut()
  $("#th4_9").fadeOut()
  $("#th4_10").fadeOut()
  $("#th4_11").fadeOut()
  $("#th4_12").fadeOut()
  $("#th4_13").fadeOut()
  $("#th4_14").fadeOut()
  $("#th4_15").fadeOut()
  $("#th4_16").fadeOut()
  $("#th4_17").fadeOut()
  $("#th4_18").fadeOut()
  $("#th4_19").fadeOut()
  $("#th4_20").fadeOut()
  $("#th4_21").fadeOut()
  $("#th4_22").fadeOut()
  $("#th4_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnFour = async id => {
  $("#th5_1").fadeOut()
  $("#th5_2").fadeOut()
  $("#th5_3").fadeOut()
  $("#th5_4").fadeOut()
  $("#th5_5").fadeOut()
  $("#th5_6").fadeOut()
  $("#th5_7").fadeOut()
  $("#th5_8").fadeOut()
  $("#th5_9").fadeOut()
  $("#th5_10").fadeOut()
  $("#th5_11").fadeOut()
  $("#th5_12").fadeOut()
  $("#th5_13").fadeOut()
  $("#th5_14").fadeOut()
  $("#th5_15").fadeOut()
  $("#th5_16").fadeOut()
  $("#th5_17").fadeOut()
  $("#th5_18").fadeOut()
  $("#th5_19").fadeOut()
  $("#th5_20").fadeOut()
  $("#th5_21").fadeOut()
  $("#th5_22").fadeOut()
  $("#th5_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnFive = async id => {
  $("#th6_1").fadeOut()
  $("#th6_2").fadeOut()
  $("#th6_3").fadeOut()
  $("#th6_4").fadeOut()
  $("#th6_5").fadeOut()
  $("#th6_6").fadeOut()
  $("#th6_7").fadeOut()
  $("#th6_8").fadeOut()
  $("#th6_9").fadeOut()
  $("#th6_10").fadeOut()
  $("#th6_11").fadeOut()
  $("#th6_12").fadeOut()
  $("#th6_13").fadeOut()
  $("#th6_14").fadeOut()
  $("#th6_15").fadeOut()
  $("#th6_16").fadeOut()
  $("#th6_17").fadeOut()
  $("#th6_18").fadeOut()
  $("#th6_19").fadeOut()
  $("#th6_20").fadeOut()
  $("#th6_21").fadeOut()
  $("#th6_22").fadeOut()
  $("#th6_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnSix = async id => {
  $("#th7_1").fadeOut()
  $("#th7_2").fadeOut()
  $("#th7_3").fadeOut()
  $("#th7_4").fadeOut()
  $("#th7_5").fadeOut()
  $("#th7_6").fadeOut()
  $("#th7_7").fadeOut()
  $("#th7_8").fadeOut()
  $("#th7_9").fadeOut()
  $("#th7_10").fadeOut()
  $("#th7_11").fadeOut()
  $("#th7_12").fadeOut()
  $("#th7_13").fadeOut()
  $("#th7_14").fadeOut()
  $("#th7_15").fadeOut()
  $("#th7_16").fadeOut()
  $("#th7_17").fadeOut()
  $("#th7_18").fadeOut()
  $("#th7_19").fadeOut()
  $("#th7_20").fadeOut()
  $("#th7_21").fadeOut()
  $("#th7_22").fadeOut()
  $("#th7_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnSeven = async id => {
  $("#th8_1").fadeOut()
  $("#th8_2").fadeOut()
  $("#th8_3").fadeOut()
  $("#th8_4").fadeOut()
  $("#th8_5").fadeOut()
  $("#th8_6").fadeOut()
  $("#th8_7").fadeOut()
  $("#th8_8").fadeOut()
  $("#th8_9").fadeOut()
  $("#th8_10").fadeOut()
  $("#th8_11").fadeOut()
  $("#th8_12").fadeOut()
  $("#th8_13").fadeOut()
  $("#th8_14").fadeOut()
  $("#th8_15").fadeOut()
  $("#th8_16").fadeOut()
  $("#th8_17").fadeOut()
  $("#th8_18").fadeOut()
  $("#th8_19").fadeOut()
  $("#th8_20").fadeOut()
  $("#th8_21").fadeOut()
  $("#th8_22").fadeOut()
  $("#th8_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnEight = async id => {
  $("#th9_1").fadeOut()
  $("#th9_2").fadeOut()
  $("#th9_3").fadeOut()
  $("#th9_4").fadeOut()
  $("#th9_5").fadeOut()
  $("#th9_6").fadeOut()
  $("#th9_7").fadeOut()
  $("#th9_8").fadeOut()
  $("#th9_9").fadeOut()
  $("#th9_10").fadeOut()
  $("#th9_11").fadeOut()
  $("#th9_12").fadeOut()
  $("#th9_13").fadeOut()
  $("#th9_14").fadeOut()
  $("#th9_15").fadeOut()
  $("#th9_16").fadeOut()
  $("#th9_17").fadeOut()
  $("#th9_18").fadeOut()
  $("#th9_19").fadeOut()
  $("#th9_20").fadeOut()
  $("#th9_21").fadeOut()
  $("#th9_22").fadeOut()
  $("#th9_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnNine = async id => {
  $("#th10_1").fadeOut()
  $("#th10_2").fadeOut()
  $("#th10_3").fadeOut()
  $("#th10_4").fadeOut()
  $("#th10_5").fadeOut()
  $("#th10_6").fadeOut()
  $("#th10_7").fadeOut()
  $("#th10_8").fadeOut()
  $("#th10_9").fadeOut()
  $("#th10_10").fadeOut()
  $("#th10_11").fadeOut()
  $("#th10_12").fadeOut()
  $("#th10_13").fadeOut()
  $("#th10_14").fadeOut()
  $("#th10_15").fadeOut()
  $("#th10_16").fadeOut()
  $("#th10_17").fadeOut()
  $("#th10_18").fadeOut()
  $("#th10_19").fadeOut()
  $("#th10_20").fadeOut()
  $("#th10_21").fadeOut()
  $("#th10_22").fadeOut()
  $("#th10_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnTen = async id => {
  $("#th11_1").fadeOut()
  $("#th11_2").fadeOut()
  $("#th11_3").fadeOut()
  $("#th11_4").fadeOut()
  $("#th11_5").fadeOut()
  $("#th11_6").fadeOut()
  $("#th11_7").fadeOut()
  $("#th11_8").fadeOut()
  $("#th11_9").fadeOut()
  $("#th11_10").fadeOut()
  $("#th11_11").fadeOut()
  $("#th11_12").fadeOut()
  $("#th11_13").fadeOut()
  $("#th11_14").fadeOut()
  $("#th11_15").fadeOut()
  $("#th11_16").fadeOut()
  $("#th11_17").fadeOut()
  $("#th11_18").fadeOut()
  $("#th11_19").fadeOut()
  $("#th11_20").fadeOut()
  $("#th11_21").fadeOut()
  $("#th11_22").fadeOut()
  $("#th11_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnEleven = async id => {
  $("#th12_1").fadeOut()
  $("#th12_2").fadeOut()
  $("#th12_3").fadeOut()
  $("#th12_4").fadeOut()
  $("#th12_5").fadeOut()
  $("#th12_6").fadeOut()
  $("#th12_7").fadeOut()
  $("#th12_8").fadeOut()
  $("#th12_9").fadeOut()
  $("#th12_10").fadeOut()
  $("#th12_11").fadeOut()
  $("#th12_12").fadeOut()
  $("#th12_13").fadeOut()
  $("#th12_14").fadeOut()
  $("#th12_15").fadeOut()
  $("#th12_16").fadeOut()
  $("#th12_17").fadeOut()
  $("#th12_18").fadeOut()
  $("#th12_19").fadeOut()
  $("#th12_20").fadeOut()
  $("#th12_21").fadeOut()
  $("#th12_22").fadeOut()
  $("#th12_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnTwelve = async id => {
  $("#th13_1").fadeOut()
  $("#th13_2").fadeOut()
  $("#th13_3").fadeOut()
  $("#th13_4").fadeOut()
  $("#th13_5").fadeOut()
  $("#th13_6").fadeOut()
  $("#th13_7").fadeOut()
  $("#th13_8").fadeOut()
  $("#th13_9").fadeOut()
  $("#th13_10").fadeOut()
  $("#th13_11").fadeOut()
  $("#th13_12").fadeOut()
  $("#th13_13").fadeOut()
  $("#th13_14").fadeOut()
  $("#th13_15").fadeOut()
  $("#th13_16").fadeOut()
  $("#th13_17").fadeOut()
  $("#th13_18").fadeOut()
  $("#th13_19").fadeOut()
  $("#th13_20").fadeOut()
  $("#th13_21").fadeOut()
  $("#th13_22").fadeOut()
  $("#th13_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnThirty = async id => {
  $("#th14_1").fadeOut()
  $("#th14_2").fadeOut()
  $("#th14_3").fadeOut()
  $("#th14_4").fadeOut()
  $("#th14_5").fadeOut()
  $("#th14_6").fadeOut()
  $("#th14_7").fadeOut()
  $("#th14_8").fadeOut()
  $("#th14_9").fadeOut()
  $("#th14_10").fadeOut()
  $("#th14_11").fadeOut()
  $("#th14_12").fadeOut()
  $("#th14_13").fadeOut()
  $("#th14_14").fadeOut()
  $("#th14_15").fadeOut()
  $("#th14_16").fadeOut()
  $("#th14_17").fadeOut()
  $("#th14_18").fadeOut()
  $("#th14_19").fadeOut()
  $("#th14_20").fadeOut()
  $("#th14_21").fadeOut()
  $("#th14_22").fadeOut()
  $("#th14_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnFourteen = async id => {
  $("#th15_1").fadeOut()
  $("#th15_2").fadeOut()
  $("#th15_3").fadeOut()
  $("#th15_4").fadeOut()
  $("#th15_5").fadeOut()
  $("#th15_6").fadeOut()
  $("#th15_7").fadeOut()
  $("#th15_8").fadeOut()
  $("#th15_9").fadeOut()
  $("#th15_10").fadeOut()
  $("#th15_11").fadeOut()
  $("#th15_12").fadeOut()
  $("#th15_13").fadeOut()
  $("#th15_14").fadeOut()
  $("#th15_15").fadeOut()
  $("#th15_16").fadeOut()
  $("#th15_17").fadeOut()
  $("#th15_18").fadeOut()
  $("#th15_19").fadeOut()
  $("#th15_20").fadeOut()
  $("#th15_21").fadeOut()
  $("#th15_22").fadeOut()
  $("#th15_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnFifteen = async id => {
  $("#th16_1").fadeOut()
  $("#th16_2").fadeOut()
  $("#th16_3").fadeOut()
  $("#th16_4").fadeOut()
  $("#th16_5").fadeOut()
  $("#th16_6").fadeOut()
  $("#th16_7").fadeOut()
  $("#th16_8").fadeOut()
  $("#th16_9").fadeOut()
  $("#th16_10").fadeOut()
  $("#th16_11").fadeOut()
  $("#th16_12").fadeOut()
  $("#th16_13").fadeOut()
  $("#th16_14").fadeOut()
  $("#th16_15").fadeOut()
  $("#th16_16").fadeOut()
  $("#th16_17").fadeOut()
  $("#th16_18").fadeOut()
  $("#th16_19").fadeOut()
  $("#th16_20").fadeOut()
  $("#th16_21").fadeOut()
  $("#th16_22").fadeOut()
  $("#th16_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnSixteen = async id => {
  $("#th17_1").fadeOut()
  $("#th17_2").fadeOut()
  $("#th17_3").fadeOut()
  $("#th17_4").fadeOut()
  $("#th17_5").fadeOut()
  $("#th17_6").fadeOut()
  $("#th17_7").fadeOut()
  $("#th17_8").fadeOut()
  $("#th17_9").fadeOut()
  $("#th17_10").fadeOut()
  $("#th17_11").fadeOut()
  $("#th17_12").fadeOut()
  $("#th17_13").fadeOut()
  $("#th17_14").fadeOut()
  $("#th17_15").fadeOut()
  $("#th17_16").fadeOut()
  $("#th17_17").fadeOut()
  $("#th17_18").fadeOut()
  $("#th17_19").fadeOut()
  $("#th17_20").fadeOut()
  $("#th17_21").fadeOut()
  $("#th17_22").fadeOut()
  $("#th17_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnSeventeen = async id => {
  $("#th18_1").fadeOut()
  $("#th18_2").fadeOut()
  $("#th18_3").fadeOut()
  $("#th18_4").fadeOut()
  $("#th18_5").fadeOut()
  $("#th18_6").fadeOut()
  $("#th18_7").fadeOut()
  $("#th18_8").fadeOut()
  $("#th18_9").fadeOut()
  $("#th18_10").fadeOut()
  $("#th18_11").fadeOut()
  $("#th18_12").fadeOut()
  $("#th18_13").fadeOut()
  $("#th18_14").fadeOut()
  $("#th18_15").fadeOut()
  $("#th18_16").fadeOut()
  $("#th18_17").fadeOut()
  $("#th18_18").fadeOut()
  $("#th18_19").fadeOut()
  $("#th18_20").fadeOut()
  $("#th18_21").fadeOut()
  $("#th18_22").fadeOut()
  $("#th18_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnEightteen = async id => {
  $("#th19_1").fadeOut()
  $("#th19_2").fadeOut()
  $("#th19_3").fadeOut()
  $("#th19_4").fadeOut()
  $("#th19_5").fadeOut()
  $("#th19_6").fadeOut()
  $("#th19_7").fadeOut()
  $("#th19_8").fadeOut()
  $("#th19_9").fadeOut()
  $("#th19_10").fadeOut()
  $("#th19_11").fadeOut()
  $("#th19_12").fadeOut()
  $("#th19_13").fadeOut()
  $("#th19_14").fadeOut()
  $("#th19_15").fadeOut()
  $("#th19_16").fadeOut()
  $("#th19_17").fadeOut()
  $("#th19_18").fadeOut()
  $("#th19_19").fadeOut()
  $("#th19_20").fadeOut()
  $("#th19_21").fadeOut()
  $("#th19_22").fadeOut()
  $("#th19_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnNineteen = async id => {
  $("#th20_1").fadeOut()
  $("#th20_2").fadeOut()
  $("#th20_3").fadeOut()
  $("#th20_4").fadeOut()
  $("#th20_5").fadeOut()
  $("#th20_6").fadeOut()
  $("#th20_7").fadeOut()
  $("#th20_8").fadeOut()
  $("#th20_9").fadeOut()
  $("#th20_10").fadeOut()
  $("#th20_11").fadeOut()
  $("#th20_12").fadeOut()
  $("#th20_13").fadeOut()
  $("#th20_14").fadeOut()
  $("#th20_15").fadeOut()
  $("#th20_16").fadeOut()
  $("#th20_17").fadeOut()
  $("#th20_18").fadeOut()
  $("#th20_19").fadeOut()
  $("#th20_20").fadeOut()
  $("#th20_21").fadeOut()
  $("#th20_22").fadeOut()
  $("#th20_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnTwenty = async id => {
  $("#th21_1").fadeOut()
  $("#th21_2").fadeOut()
  $("#th21_3").fadeOut()
  $("#th21_4").fadeOut()
  $("#th21_5").fadeOut()
  $("#th21_6").fadeOut()
  $("#th21_7").fadeOut()
  $("#th21_8").fadeOut()
  $("#th21_9").fadeOut()
  $("#th21_10").fadeOut()
  $("#th21_11").fadeOut()
  $("#th21_12").fadeOut()
  $("#th21_13").fadeOut()
  $("#th21_14").fadeOut()
  $("#th21_15").fadeOut()
  $("#th21_16").fadeOut()
  $("#th21_17").fadeOut()
  $("#th21_18").fadeOut()
  $("#th21_19").fadeOut()
  $("#th21_20").fadeOut()
  $("#th21_21").fadeOut()
  $("#th21_22").fadeOut()
  $("#th21_23").fadeOut()

  $("#th2_0").css('display', 'block')
}

const hideColumnTwentyOne = async id => {
  $("#th22_1").fadeOut()
  $("#th22_2").fadeOut()
  $("#th22_3").fadeOut()
  $("#th22_4").fadeOut()
  $("#th22_5").fadeOut()
  $("#th22_6").fadeOut()
  $("#th22_7").fadeOut()
  $("#th22_8").fadeOut()
  $("#th22_9").fadeOut()
  $("#th22_10").fadeOut()
  $("#th22_11").fadeOut()
  $("#th22_12").fadeOut()
  $("#th22_13").fadeOut()
  $("#th22_14").fadeOut()
  $("#th22_15").fadeOut()
  $("#th22_16").fadeOut()
  $("#th22_17").fadeOut()
  $("#th22_18").fadeOut()
  $("#th22_19").fadeOut()
  $("#th22_20").fadeOut()
  $("#th22_21").fadeOut()
  $("#th22_22").fadeOut()
  $("#th22_23").fadeOut()

  $("#th2_0").css('display', 'block')
}


const invoiceListStore = useInvoiceStore()
const searchQuery = ref('')
const selectedStatus = ref()
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalInvoices = ref(0)
const invoices = ref([])
const selectedRows = ref([])

// 👉 Fetch Invoices
watchEffect(() => {
  invoiceListStore.fetchInvoices({
    q: searchQuery.value,
    status: selectedStatus.value,
    perPage: rowPerPage.value,
    currentPage: currentPage.value,
  }).then(response => {
    invoices.value = response.data.invoices
    totalPage.value = response.data.totalPage
    totalInvoices.value = response.data.totalInvoices
  }).catch(error => {
    console.log(error)
  })
})

// 👉 Fetch Invoices
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = invoices.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = invoices.value.length + (currentPage.value - 1) * rowPerPage.value

  return `Showing ${ firstIndex } to ${ lastIndex } of ${ totalInvoices.value } entries`
})

// 👉 Invoice balance variant resolver
const resolveInvoiceBalanceVariant = (balance, total) => {
  if (balance === total)
    return {
      status: 'Unpaid',
      chip: { color: 'error' },
    }
  if (balance === 0)
    return {
      status: 'Paid',
      chip: { color: 'success' },
    }

  return {
    status: balance,
    chip: { variant: 'text' },
  }
}

const resolveInvoiceStatusVariantAndIcon = status => {
  if (status === 'Partial Payment')
    return {
      variant: 'success',
      icon: 'tabler-circle-half-2',
    }
  if (status === 'Paid')
    return {
      variant: 'warning',
      icon: 'tabler-chart-pie',
    }
  if (status === 'Downloaded')
    return {
      variant: 'info',
      icon: 'tabler-arrow-down-circle',
    }
  if (status === 'Draft')
    return {
      variant: 'primary',
      icon: 'tabler-device-floppy',
    }
  if (status === 'Sent')
    return {
      variant: 'secondary',
      icon: 'tabler-circle-check',
    }
  if (status === 'Past Due')
    return {
      variant: 'error',
      icon: 'tabler-alert-circle',
    }

  return {
    variant: 'secondary',
    icon: 'tabler-x',
  }
}

onMounted(() => handleActionClick_301(1))
onMounted(() => handleActionClick_302(1))
onMounted(() => handleActionClick_303(1))
onMounted(() => handleActionClick_30401(1))
onMounted(() => handleActionClick_30402(1))
onMounted(() => handleActionClick_30501(1))
onMounted(() => handleActionClick_30502(1))
onMounted(() => handleActionClick_30503(1))
onMounted(() => handleActionClick_30504(1))
onMounted(() => handleActionClick_30601(1))
onMounted(() => handleActionClick_30602(1))
onMounted(() => handleActionClick_30603(1))
onMounted(() => handleActionClick_30604(1))
onMounted(() => handleActionClick_30605(1))
onMounted(() => handleActionClick_30606(1))
onMounted(() => handleActionClick_30607(1))
onMounted(() => handleActionClick_30701(1))
onMounted(() => handleActionClick_30702(1))
onMounted(() => handleActionClick_30(1))
onMounted(() => handleActionClick_31(1))
</script>

<template>
  <VCard
    id="invoice-list"
  >
    <!-- SECTION Table -->
    <VTable class="text-no-wrap invoice-list-table">
      <!-- 👉 Table head -->
      <thead class="text-uppercase sticky-header">
      <tr>
        <th scope="col" width="400" id="th1_1">
          <VBtn icon variant="text" color="default" size="x-small" @click="showColumn(this)">
            <VIcon :size="22" icon="tabler-arrow-big-left-line" class="text-primary"/>
          </VBtn>
          Restaurar columnas
        </th>
        <th scope="col" width="100" id="th2_1"></th>

        <th scope="col" class="text-center" width="150" id="th3_1">
          <VBtn
            icon
            variant="text"
            size="x-small"
            :style="{ backgroundColor: show_301 ? '#477130' : '' }"
            @click="hideColumnTwo(this)"
          >
            <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_302, 'text-primary': !show_302 }" />
          </VBtn>
        </th>

        <th scope="col" style="width:300px;text-align:center;" id="th4_1">
          <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_302 ? '#477130' : '' }" @click="hideColumnThree(this)">
            <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_302, 'text-primary': !show_302 }"/>
          </VBtn>
        </th>
        <th scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_1">
          <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_303 ? '#DB7E3A' : '' }" @click="hideColumnFour(this)">
            <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_303, 'text-primary': !show_303 }"/>
          </VBtn>
        </th>
        <th scope="col" class="text-center" style="text-align:center;">
          <tr>
            <th style="min-width:150px;" id="th6_1">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_30401 ? '#DB7E3A' : '' }" @click="hideColumnFive(this)">
                  <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_30401, 'text-primary': !show_30401 }"/>
                </VBtn>
              </div>
            </th>
            <th style="min-width:150px;" id="th7_1">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_30402 ? '#DB7E3A' : '' }" @click="hideColumnSix(this)">
                  <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_30402, 'text-primary': !show_30402 }"/>
                </VBtn>
              </div>
            </th>
          </tr>
        </th>
        <th scope="col" class="text-center" style="text-align:center;">
          <tr>
            <th style="min-width:150px;" id="th8_1">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_30501 ? '#DB7E3A' : '' }" @click="hideColumnSeven(this)">
                  <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_30501, 'text-primary': !show_30501 }"/>
                </VBtn>
              </div>
            </th>
            <th style="min-width:150px;" id="th9_1">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_30502 ? '#DB7E3A' : '' }" @click="hideColumnEight(this)">
                  <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_30502, 'text-primary': !show_30502 }"/>
                </VBtn>
              </div>
            </th>
            <th style="min-width:150px;" id="th10_1">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_30503 ? '#DB7E3A' : '' }" @click="hideColumnNine(this)">
                  <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_30503, 'text-primary': !show_30503 }"/>
                </VBtn>
              </div>
            </th>
            <th style="min-width:150px;" id="th11_1">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_30504 ? '#DB7E3A' : '' }" @click="hideColumnTen(this)">
                  <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_30504, 'text-primary': !show_30504 }"/>
                </VBtn>
              </div>
            </th>
          </tr>
        </th>
        <th scope="col" class="text-center" style="text-align:center;">
          <tr>
            <th style="min-width:150px;" id="th12_1">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_30601 ? '#DB7E3A' : '' }" @click="hideColumnEleven(this)">
                  <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_30601, 'text-primary': !show_30601 }"/>
                </VBtn>
              </div>
            </th>
            <th style="min-width:150px;" id="th13_1">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_30602 ? '#DB7E3A' : '' }" @click="hideColumnTwelve(this)">
                  <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_30602, 'text-primary': !show_30602 }"/>
                </VBtn>
              </div>
            </th>
            <th style="min-width:150px;" id="th14_1">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_30603 ? '#DB7E3A' : '' }" @click="hideColumnThirty(this)">
                  <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_30603, 'text-primary': !show_30603 }"/>
                </VBtn>
              </div>
            </th>
            <th style="min-width:150px;" id="th15_1">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_30604 ? '#DB7E3A' : '' }" @click="hideColumnFourteen(this)">
                  <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_30604, 'text-primary': !show_30604 }"/>
                </VBtn>
              </div>
            </th>
            <th style="min-width:150px;" id="th16_1">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_30605 ? '#DB7E3A' : '' }" @click="hideColumnFifteen(this)">
                  <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_30605, 'text-primary': !show_30605 }"/>
                </VBtn>
              </div>
            </th>
            <th style="min-width:150px;" id="th17_1">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_30606 ? '#DB7E3A' : '' }" @click="hideColumnSixteen(this)">
                  <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_30606, 'text-primary': !show_30606 }"/>
                </VBtn>
              </div>
            </th>
            <th style="min-width:150px;" id="th18_1">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_30607 ? '#DB7E3A' : '' }" @click="hideColumnSeventeen(this)">
                  <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_30607, 'text-primary': !show_30607 }"/>
                </VBtn>
              </div>
            </th>
            <th style="min-width:150px;" id="th19_1">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_30701 ? '#DB7E3A' : '' }" @click="hideColumnEightteen(this)">
                  <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_30701, 'text-primary': !show_30701 }"/>
                </VBtn>
              </div>
            </th>
            <th style="min-width:150px;" id="th20_1">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_30702 ? '#DB7E3A' : '' }" @click="hideColumnNineteen(this)">
                  <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_30702, 'text-primary': !show_30702 }"/>
                </VBtn>
              </div>
            </th>
          </tr>
        </th>
        <th style="min-width:150px;" id="th21_1">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_30 ? '#DB7E3A' : '' }" @click="hideColumnTwenty(this)">
              <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_30, 'text-primary': !show_30 }"/>
            </VBtn>
          </div>
        </th>
        <th style="min-width:150px;" id="th22_1">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VBtn icon variant="text" color="default" size="x-small" :style="{ backgroundColor: show_31 ? '#DB7E3A' : '' }" @click="hideColumnTwentyOne(this)">
              <VIcon :size="22" icon="tabler-arrow-big-left-line" :class="{ 'text-white': show_31, 'text-primary': !show_31 }"/>
            </VBtn>
          </div>
        </th>
        <th scope="col" id="th23_1"></th>
      </tr>
      <!-- CABECERA 1 -->
      <tr>
        <th scope="col" width="400"> EN CIFRAS COMPLETAS US$</th>
        <th scope="col" width="100" id="th2_2"></th>
        <th scope="col" class="text-center" width="150" id="th3_2">CAPITAL SOCIAL</th>
        <th scope="col" style="width:300px;text-align:center;" id="th4_2">
          <div style="max-width:300px; height:100px;white-space: initial;align-text:center;">APORTES DE SOCIOS O ACCIONISTAS PARA FUTURA CAPITALIZACIÓN</div>
        </th>
        <th scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_2">
          <div style="width:120px; height:100px;white-space: initial;align-text:center;">PRIMA EMISIÓN PRIMARIA DE ACCIONES</div>
        </th>
        <th scope="col" class="text-center" style="text-align:center;" >
          <tr>
            <th style="min-width:150px;" id="th6_2">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">RESERVA LEGAL</div>
            </th>
            <th style="min-width:150px;" id="th7_2">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">RESERVAS FACULTATIVA Y ESTATUTARIA</div>
            </th>
          </tr>
        </th>
        <th scope="col" class="text-center" style="text-align:center;">
          <tr>
            <th style="min-width:150px;" id="th8_2">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">ACTIVOS FINANCIEROS DISPONIBLES PARA LA VENTA</div>
            </th>
            <th style="min-width:150px;" id="th9_2">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">PROPIEDADES,PLANTA Y EQUIPO</div>
            </th>
            <th style="min-width:150px;" id="th10_2">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">ACTIVOS INTANGIBLES</div>
            </th>
            <th style="min-width:150px;" id="th11_2">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">OTROS SUPERAVIT POR REVALUACION</div>
            </th>
          </tr>
        </th>

        <th scope="col" class="text-center" style="text-align:center;">
          <tr>
            <th style="min-width:150px;" id="th12_2">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">GANANCIAS ACUMULADAS</div>
            </th>
            <th style="min-width:150px;" id="th13_2">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">(-) PÉRDIDAS ACUMULADAS</div>
            </th>
            <th style="min-width:150px;" id="th14_2">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">RESULTADOS ACUMULADOS POR APLICACIÓN PRIMERA VEZ DE LAS NIIF</div>
            </th>
            <th style="min-width:150px;" id="th15_2">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">RESERVA DE CAPITAL</div>
            </th>
            <th style="min-width:150px;" id="th16_2">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">RESERVA POR DONACIONES</div>
            </th>
            <th style="min-width:150px;" id="th17_2">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">RESERVA POR VALUACIÓN</div>
            </th>
            <th style="min-width:150px;" id="th18_2">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">RESERVA POR REVALUACIÓN DE INVERSIONES</div>
            </th>
            <th style="min-width:150px;" id="th19_2">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">GANANCIA NETA DEL PERIODO</div>
            </th>
            <th style="min-width:150px;" id="th20_2">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">(-) PÉRDIDA NETA DEL PERIODO</div>
            </th>
          </tr>
        </th>
        <th style="min-width:150px;" id="th21_2">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">TOTAL PATRIMONIO NETO ATRIBUIBLE A LOS PROPIETARIOS CONTROLADORA</div>
        </th>
        <th style="min-width:150px;" id="th22_2">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">PARTICIPACIONES NO CONTROLADORA</div>
        </th>
        <th scope="col"  id="th23_2">TOTAL PATRIMONIO</th>
      </tr>
      <!-- CABECERA 2 -->
      <tr>
        <th scope="col" width="400"></th>
        <th scope="col" width="100" id="th2_3">CÓDIGO</th>
        <th scope="col" class="text-center" width="150" id="th3_3">301</th>
        <th scope="col" style="width:300px;text-align:center;" id="th4_3">302</th>
        <th scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_3">303</th>
        <th scope="col" class="text-center" style="text-align:center;">
          <tr>
            <th style="min-width:150px;" id="th6_3">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">30401</div>
            </th>
            <th style="min-width:150px;" id="th7_3">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">30402</div>
            </th>
          </tr>
        </th>
        <th scope="col" class="text-center" style="text-align:center;">
          <tr>
            <th style="min-width:150px;" id="th8_3">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">30501</div>
            </th>
            <th style="min-width:150px;" id="th9_3">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">30502</div>
            </th>
            <th style="min-width:150px;" id="th10_3">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">30503</div>
            </th>
            <th style="min-width:150px;" id="th11_3">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">30504</div>
            </th>
          </tr>
        </th>
        <th scope="col" class="text-center" style="text-align:center;">
          <tr>
            <th style="min-width:150px;" id="th12_3">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">30601</div>
            </th>
            <th style="min-width:150px;" id="th13_3">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">30602</div>
            </th>
            <th style="min-width:150px;" id="th14_3">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">30603</div>
            </th>
            <th style="min-width:150px;" id="th15_3">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">30604</div>
            </th>
            <th style="min-width:150px;" id="th16_3">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">30605</div>
            </th>
            <th style="min-width:150px;" id="th17_3">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">30606</div>
            </th>
            <th style="min-width:150px;" id="th18_3">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">30607</div>
            </th>
            <th style="min-width:150px;" id="th19_3">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">30701</div>
            </th>
            <th style="min-width:150px;" id="th20_3">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">30702</div>
            </th>
          </tr>
        </th>
        <th style="min-width:150px;" id="th21_3">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">30</div>
        </th>
        <th style="min-width:150px;" id="th22_3">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">31</div>
        </th>
        <th scope="col" id="th23_3"></th>
      </tr>
      </thead>

      <!-- 👉 Table Body -->
      <tbody class="sticky-row">
      <!-- 9901 | SALDO REEXPRESADO DEL PERIODO INMEDIATO ANTERIOR ANTERIOR | 4 -->
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400">SALDO REEXPRESADO DEL PERIODO <br/>INMEDIATO ANTERIOR ANTERIOR</td>
        <td scope="col" width="100" id="th2_4">9901</td>
        <td scope="col" class="text-center" width="150" id="th3_4">
          <VTextField label="9901_301" type="number" id="ecp_9901_301" disabled v-model="ecp_9901_301" />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_4">
          <VTextField label="9901_302" type="number" id="ecp_9901_302" disabled v-model="ecp_9901_302" />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_4">
          <VTextField label="9901_303" type="number" id="ecp_9901_303" disabled v-model="ecp_9901_303" />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_4">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9901_30401" type="number" id="ecp_9901_30401" disabled v-model="ecp_9901_30401" />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_4">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9901_30402" type="number" id="ecp_9901_30402" disabled v-model="ecp_9901_30402" />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_4">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9901_30501" type="number" id="ecp_9901_30501" disabled v-model="ecp_9901_30501" />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_4">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9901_30502" type="number" id="ecp_9901_30502" disabled v-model="ecp_9901_30502" />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_4">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9901_30503" type="number" id="ecp_9901_30503" disabled v-model="ecp_9901_30503" />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_4">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9901_30504" type="number" id="ecp_9901_30504" disabled v-model="ecp_9901_30504" />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_4">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9901_30601" type="number" id="ecp_9901_30601" disabled v-model="ecp_9901_30601" />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_4">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9901_30602" type="number" id="ecp_9901_30602" disabled v-model="ecp_9901_30602" />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_4">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9901_30603" type="number" id="ecp_9901_30603" disabled v-model="ecp_9901_30603" />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_4">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9901_30604" type="number" id="ecp_9901_30604" disabled v-model="ecp_9901_30604" />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_4">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9901_30605" type="number" id="ecp_9901_30605" disabled v-model="ecp_9901_30605" />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_4">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9901_30606" type="number" id="ecp_9901_30606" disabled v-model="ecp_9901_30606" />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_4">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9901_30607" type="number" id="ecp_9901_30607" disabled v-model="ecp_9901_30607" />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_4">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9901_30701" type="number" id="ecp_9901_30701" disabled v-model="ecp_9901_30701" />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_4">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9901_30702" type="number" id="ecp_9901_30702" disabled v-model="ecp_9901_30702" />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_4">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="9901_30" type="number" id="ecp_9901_30" disabled v-model="ecp_9901_30" />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_4">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="9901_31" type="number" id="ecp_9901_31" disabled v-model="ecp_9901_31" />
          </div>
        </td>
        <td scope="col" id="th23_4">
          <VTextField label="9901_Total" type="number" id="ecp_9901_Total" disabled v-model="ecp_9901_Total" />
        </td>
      </tr>
      <!-- 990101 | SALDO DEL PERÍODO INMEDIATO ANTERIOR | 5 -->
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400">SALDO DEL PERÍODO INMEDIATO ANTERIOR</td>
        <td scope="col" width="100" id="th2_5">990101</td>
        <td scope="col" class="text-center" width="150" id="th3_5">
          <VTextField label="990101_301" type="number" id="ecp_990101_301" v-model="ecp_990101_301" @input="handleActionClick_301(this)" @blur="handleActionClick_301(this)" @keyup="handleActionClick_301(this)" />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_5">
          <VTextField label="990101_302" type="number" id="ecp_990101_302" v-model="ecp_990101_302" @input="handleActionClick_302(this)" @blur="handleActionClick_302(this)" @keyup="handleActionClick_302(this)" />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_5">
          <VTextField label="990101_303" type="number" id="ecp_990101_303" v-model="ecp_990101_303" @input="handleActionClick_303(this)" @blur="handleActionClick_303(this)" @keyup="handleActionClick_303(this)" />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_5">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990101_30401" type="number" id="ecp_990101_30401" v-model="ecp_990101_30401"  @input="handleActionClick_30401(this)" @blur="handleActionClick_30401(this)" @keyup="handleActionClick_30401(this)" />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_5">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990101_30402" type="number" id="ecp_990101_30402" v-model="ecp_990101_30402" @input="handleActionClick_30402(this)" @blur="handleActionClick_30402(this)" @keyup="handleActionClick_30402(this)" />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_5">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990101_30501" type="number" id="ecp_990101_30501" v-model="ecp_990101_30501" @input="handleActionClick_30501(this)" @blur="handleActionClick_30501(this)" @keyup="handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_5">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990101_30502" type="number" id="ecp_990101_30502" v-model="ecp_990101_30502" @input="handleActionClick_30502(this)" @blur="handleActionClick_30502(this)" @keyup="handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_5">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990101_30503" type="number" id="ecp_990101_30503" v-model="ecp_990101_30503" @input="handleActionClick_30503(this)" @blur="handleActionClick_30503(this)" @keyup="handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_5">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990101_30504" type="number" id="ecp_990101_30504" v-model="ecp_990101_30504" @input="handleActionClick_30504(this)" @blur="handleActionClick_30504(this)" @keyup="handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_5">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990101_30601" type="number" id="ecp_990101_30601" v-model="ecp_990101_30601" @input="handleActionClick_30601(this)" @blur="handleActionClick_30601(this)" @keyup="handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_5">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990101_30602" type="number" id="ecp_990101_30602" v-model="ecp_990101_30602" @input="handleActionClick_30602(this); convertirNegativo_990101_30602()" @blur="handleActionClick_30602(this)" @keyup="handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_5">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990101_30603" type="number" id="ecp_990101_30603" v-model="ecp_990101_30603" @input="handleActionClick_30603(this)" @blur="handleActionClick_30603(this)" @keyup="handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_5">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990101_30604" type="number" id="ecp_990101_30604" v-model="ecp_990101_30604" @input="handleActionClick_30604(this)" @blur="handleActionClick_30604(this)" @keyup="handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_5">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990101_30605" type="number" id="ecp_990101_30605" v-model="ecp_990101_30605" @input="handleActionClick_30605(this)" @blur="handleActionClick_30605(this)" @keyup="handleActionClick_30605(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_5">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990101_30606" type="number" id="ecp_990101_30606" v-model="ecp_990101_30606" @input="handleActionClick_30606(this)" @blur="handleActionClick_30606(this)" @keyup="handleActionClick_30606(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_5">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990101_30607" type="number" id="ecp_990101_30607" v-model="ecp_990101_30607" @input="handleActionClick_30607(this)" @blur="handleActionClick_30607(this)" @keyup="handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_5">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990101_30701" type="number" id="ecp_990101_30701" v-model="ecp_990101_30701" @input="handleActionClick_30701(this)" @blur="handleActionClick_30701(this)" @keyup="handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_5">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990101_30702" type="number" id="ecp_990101_30702" v-model="ecp_990101_30702" @input="handleActionClick_30702(this); convertirNegativo_990101_30702()" @blur="handleActionClick_30702(this)" @keyup="handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_5">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990101_30" type="number" id="ecp_990101_30"  disabled v-model="ecp_990101_30" @input="handleActionClick_30(this)" @blur="handleActionClick_30(this)" @keyup="handleActionClick_30(this)"  />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_5">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990101_31" type="number" id="ecp_990101_31" v-model="ecp_990101_31" @input="handleActionClick_31(this)" @blur="handleActionClick_31(this)" @keyup="handleActionClick_31(this)"  />
          </div>
        </td>
        <td scope="col"  id="th23_5">
          <VTextField label="990101_Total" type="number" id="ecp_" disabled v-model="ecp_990101_Total" @input="handleActionClick_Total(this)" @blur="handleActionClick_Total(this)" @keyup="handleActionClick_Total(this)"  />
        </td>
      </tr>
      <!-- 990102 | CAMBIOS EN POLITICAS CONTABLES |6 -->
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400">CAMBIOS EN POLITICAS CONTABLES:</td>
        <td scope="col" width="100" id="th2_6">990102</td>
        <td scope="col" class="text-center" width="150" id="th3_6">
          <VTextField label="990102_301" type="number" id="ecp_990102_301" v-model="ecp_990102_301"  @input="handleActionClick_301(this)" @blur="handleActionClick_301(this)" @keyup="handleActionClick_301(this)" />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_6">
          <VTextField label="990102_302" type="number" id="ecp_990102_302" v-model="ecp_990102_302" @input="handleActionClick_302(this)" @blur="handleActionClick_302(this)" @keyup="handleActionClick_302(this)" />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_6">
          <VTextField label="990102_303" type="number" id="ecp_990102_303" v-model="ecp_990102_303" @input="handleActionClick_303(this)" @blur="handleActionClick_303(this)" @keyup="handleActionClick_303(this)" />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_6">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990102_30401" type="number" id="ecp_990102_30401" v-model="ecp_990102_30401" @input="handleActionClick_30401(this)" @blur="handleActionClick_30401(this)" @keyup="handleActionClick_30401(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_6">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990102_30402" type="number" id="ecp_990102_30402" v-model="ecp_990102_30402" @input="handleActionClick_30402(this)" @blur="handleActionClick_30402(this)" @keyup="handleActionClick_30402(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_6">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990102_30501" type="number" id="ecp_990102_30501" v-model="ecp_990102_30501" @input="handleActionClick_30501(this)" @blur="handleActionClick_30501(this)" @keyup="handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_6">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990102_30502" type="number" id="ecp_990102_30502" v-model="ecp_990102_30502" @input="handleActionClick_30502(this)" @blur="handleActionClick_30502(this)" @keyup="handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_6">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990102_30503" type="number" id="ecp_990102_30503" v-model="ecp_990102_30503" @input="handleActionClick_30503(this)" @blur="handleActionClick_30503(this)" @keyup="handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_6">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990102_30504" type="number" id="ecp_990102_30504" v-model="ecp_990102_30504" @input="handleActionClick_30504(this)" @blur="handleActionClick_30504(this)" @keyup="handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_6">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990102_30601" type="number" id="ecp_990102_30601" v-model="ecp_990102_30601" @input="handleActionClick_30601(this)" @blur="handleActionClick_30601(this)" @keyup="handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_6">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990102_30602" type="number" id="ecp_990102_30602" v-model="ecp_990102_30602" @input="handleActionClick_30602(this)" @blur="handleActionClick_30602(this)" @keyup="handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_6">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990102_30603" type="number" id="ecp_990102_30603" v-model="ecp_990102_30603" @input="handleActionClick_30603(this)" @blur="handleActionClick_30603(this)" @keyup="handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_6">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990102_30604" type="number" id="ecp_990102_30604" v-model="ecp_990102_30604" @input="handleActionClick_30604(this)" @blur="handleActionClick_30604(this)" @keyup="handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_6">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990102_30605" type="number" id="ecp_990102_30605" v-model="ecp_990102_30605" @input="handleActionClick_30605(this)" @blur="handleActionClick_30605(this)" @keyup="handleActionClick_30605(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_6">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990102_30606" type="number" id="ecp_990102_30606" v-model="ecp_990102_30606" @input="handleActionClick_30606(this)" @blur="handleActionClick_30606(this)" @keyup="handleActionClick_30606(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_6">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990102_30607" type="number" id="ecp_990102_30607" v-model="ecp_990102_30607" @input="handleActionClick_30607(this)" @blur="handleActionClick_30607(this)" @keyup="handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_6">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990102_30701" type="number" id="ecp_990102_30701" v-model="ecp_990102_30701" @input="handleActionClick_30701(this)" @blur="handleActionClick_30701(this)" @keyup="handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_6">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990102_30702" type="number" id="ecp_990102_30702" v-model="ecp_990102_30702" @input="handleActionClick_30702(this)" @blur="handleActionClick_30702(this)" @keyup="handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_6">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990102_30" type="number" id="ecp_990102_30"  disabled v-model="ecp_990102_30" @input="handleActionClick_30(this)" @blur="handleActionClick_30(this)" @keyup="handleActionClick_30(this)"  />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_6">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990102_31" type="number" id="ecp_990102_31" v-model="ecp_990102_31" @input="handleActionClick_31(this)" @blur="handleActionClick_31(this)" @keyup="handleActionClick_31(this)"  />
          </div>
        </td>
        <td scope="col" id="th23_6">
          <VTextField label="990102_Total" type="number" id="ecp_990102_Total" disabled v-model="ecp_990102_Total" @input="handleActionClick_Total(this)" @blur="handleActionClick_Total(this)" @keyup="handleActionClick_Total(this)"  />
        </td>
      </tr>
      <!-- 990103 | CORRECCIÓN DE ERRORES | 7 -->
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400">CORRECCIÓN DE ERRORES:</td>
        <td scope="col" width="100" id="th2_7">990103</td>
        <td scope="col" class="text-center" width="150" id="th3_7">
          <VTextField label="990103_301" type="number" id="ecp_990103_301" v-model="ecp_990103_301" @input="handleActionClick_301(this)" @blur="handleActionClick_301(this)" @keyup="handleActionClick_301(this)" />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_7">
          <VTextField label="990103_302" type="number" id="ecp_990103_302" v-model="ecp_990103_302" @input="handleActionClick_302(this)" @blur="handleActionClick_302(this)" @keyup="handleActionClick_302(this)" />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_7">
          <VTextField label="990103_303" type="number" id="ecp_990103_303" v-model="ecp_990103_303" @input="handleActionClick_303(this)" @blur="handleActionClick_303(this)" @keyup="handleActionClick_303(this)" />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_7">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990103_30401" type="number" id="ecp_990103_30401" v-model="ecp_990103_30401" @input="handleActionClick_30401(this)" @blur="handleActionClick_30401(this)" @keyup="handleActionClick_30401(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_7">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990103_30402" type="number" id="ecp_990103_30402" v-model="ecp_990103_30402" @input="handleActionClick_30402(this)" @blur="handleActionClick_30402(this)" @keyup="handleActionClick_30402(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_7">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990103_30501" type="number" id="ecp_990103_30501" v-model="ecp_990103_30501" @input="handleActionClick_30501(this)" @blur="handleActionClick_30501(this)" @keyup="handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_7">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990103_30502" type="number" id="ecp_990103_30502" v-model="ecp_990103_30502" @input="handleActionClick_30502(this)" @blur="handleActionClick_30502(this)" @keyup="handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_7">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990103_30503" type="number" id="ecp_990103_30503" v-model="ecp_990103_30503" @input="handleActionClick_30503(this)" @blur="handleActionClick_30503(this)" @keyup="handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_7">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990103_30504" type="number" id="ecp_990103_30504" v-model="ecp_990103_30504" @input="handleActionClick_30504(this)" @blur="handleActionClick_30504(this)" @keyup="handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_7">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990103_30601" type="number" id="ecp_990103_30601" v-model="ecp_990103_30601" @input="handleActionClick_30601(this)" @blur="handleActionClick_30601(this)" @keyup="handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_7">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990103_30602" type="number" id="ecp_990103_30602" v-model="ecp_990103_30602" @input="handleActionClick_30602(this)" @blur="handleActionClick_30602(this)" @keyup="handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_7">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990103_30603" type="number" id="ecp_990103_30603" v-model="ecp_990103_30603" @input="handleActionClick_30603(this)" @blur="handleActionClick_30603(this)" @keyup="handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_7">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990103_30604" type="number" id="ecp_990103_30604" v-model="ecp_990103_30604" @input="handleActionClick_30604(this)" @blur="handleActionClick_30604(this)" @keyup="handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_7">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990103_30605" type="number" id="ecp_990103_30605" v-model="ecp_990103_30605" @input="handleActionClick_30605(this)" @blur="handleActionClick_30605(this)" @keyup="handleActionClick_30605(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_7">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990103_30606" type="number" id="ecp_990103_30606" v-model="ecp_990103_30606" @input="handleActionClick_30606(this)" @blur="handleActionClick_30606(this)" @keyup="handleActionClick_30606(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_7">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990103_30607" type="number" id="ecp_990103_30607" v-model="ecp_990103_30607" @input="handleActionClick_30607(this)" @blur="handleActionClick_30607(this)" @keyup="handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_7">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990103_30701" type="number" id="ecp_990103_30701" v-model="ecp_990103_30701" @input="handleActionClick_30701(this)" @blur="handleActionClick_30701(this)" @keyup="handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_7">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990103_30702" type="number" id="ecp_990103_30702" v-model="ecp_990103_30702" @input="handleActionClick_30702(this)" @blur="handleActionClick_30702(this)" @keyup="handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_7">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990103_30" type="number" id="ecp_990103_30"  disabled v-model="ecp_990103_30" @input="handleActionClick_30(this)" @blur="handleActionClick_30(this)" @keyup="handleActionClick_30(this)"  />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_7">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990103_31" type="number" id="ecp_990103_31" v-model="ecp_990103_31" @input="handleActionClick_31(this)" @blur="handleActionClick_31(this)" @keyup="handleActionClick_31(this)"  />
          </div>
        </td>
        <td scope="col" id="th23_7">
          <VTextField label="990103_Total" type="number" id="ecp_990103_Total" disabled v-model="ecp_990103_Total" @input="handleActionClick_Total(this)" @blur="handleActionClick_Total(this)" @keyup="handleActionClick_Total(this)"  />
        </td>
      </tr>
      <!-- 9902 | CAMBIOS DEL AÑO EN EL PATRIMONIO | 8 -->
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400">CAMBIOS DEL AÑO EN EL PATRIMONIO:</td>
        <td scope="col" width="100" id="th2_8">9902</td>
        <td scope="col" class="text-center" width="150" id="th3_8">
          <VTextField label="9902_301" type="number" id="ecp_9902_301" disabled v-model="ecp_9902_301" @input="handleActionClick_301(this)" @blur="handleActionClick_301(this)" @keyup="handleActionClick_301(this)"  />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_8">
          <VTextField label="9902_302" type="number" id="ecp_9902_302" disabled v-model="ecp_9902_302" @input="handleActionClick_302(this)" @blur="handleActionClick_302(this)" @keyup="handleActionClick_302(this)"  />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_8">
          <VTextField label="9902_303" type="number" id="ecp_9902_303" disabled v-model="ecp_9902_303" @input="handleActionClick_303(this)" @blur="handleActionClick_303(this)" @keyup="handleActionClick_303(this)"  />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_8">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9902_30401" type="number" id="ecp_9902_30401" disabled v-model="ecp_9902_30401" @input="handleActionClick_30401(this)" @blur="handleActionClick_30401(this)" @keyup="handleActionClick_30401(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_8">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9902_30402" type="number" id="ecp_9902_30402" disabled v-model="ecp_9902_30402" @input="handleActionClick_30402(this)" @blur="handleActionClick_30402(this)" @keyup="handleActionClick_30402(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_8">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9902_30501" type="number" id="ecp_9902_30501" disabled v-model="ecp_9902_30501" @input="handleActionClick_30501(this)" @blur="handleActionClick_30501(this)" @keyup="handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_8">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9902_30502" type="number" id="ecp_9902_30502" disabled v-model="ecp_9902_30502" @input="handleActionClick_30502(this)" @blur="handleActionClick_30502(this)" @keyup="handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_8">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9902_30503" type="number" id="ecp_9902_30503" disabled v-model="ecp_9902_30503" @input="handleActionClick_30503(this)" @blur="handleActionClick_30503(this)" @keyup="handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_8">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9902_30504" type="number" id="ecp_9902_30504" disabled v-model="ecp_9902_30504" @input="handleActionClick_30504(this)" @blur="handleActionClick_30504(this)" @keyup="handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_8">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9902_30601" type="number" id="ecp_9902_30601" disabled v-model="ecp_9902_30601" @input="handleActionClick_30601(this)" @blur="handleActionClick_30601(this)" @keyup="handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_8">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9902_30602" type="number" id="ecp_9902_30602" disabled v-model="ecp_9902_30602" @input="handleActionClick_30602(this)" @blur="handleActionClick_30602(this)" @keyup="handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_8">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9902_30603" type="number" id="ecp_9902_30603" disabled v-model="ecp_9902_30603" @input="handleActionClick_30603(this)" @blur="handleActionClick_30603(this)" @keyup="handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_8">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9902_30604" type="number" id="ecp_9902_30604" disabled v-model="ecp_9902_30604" @input="handleActionClick_30604(this)" @blur="handleActionClick_30604(this)" @keyup="handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_8">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9902_30605" type="number" id="ecp_9902_30605" disabled v-model="ecp_9902_30605" @input="handleActionClick_30605(this)" @blur="handleActionClick_30605(this)" @keyup="handleActionClick_30605(this)" />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_8">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9902_30606" type="number" id="ecp_9902_30606" disabled v-model="ecp_9902_30606" @input="handleActionClick_30606(this)" @blur="handleActionClick_30606(this)" @keyup="handleActionClick_30606(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_8">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9902_30607" type="number" id="ecp_9902_30607" disabled v-model="ecp_9902_30607" @input="handleActionClick_30607(this)" @blur="handleActionClick_30607(this)" @keyup="handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_8">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9902_30701" type="number" id="ecp_9902_30701" disabled v-model="ecp_9902_30701" @input="handleActionClick_30701(this)" @blur="handleActionClick_30701(this)" @keyup="handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_8">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="9902_30702" type="number" id="ecp_9902_30702" disabled v-model="ecp_9902_30702" @input="handleActionClick_30702(this)" @blur="handleActionClick_30702(this)" @keyup="handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_8">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="9902_30" type="number" id="ecp_9902_30" disabled v-model="ecp_9902_30" @input="handleActionClick_30(this)" @blur="handleActionClick_30(this)" @keyup="handleActionClick_30(this)"  />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_8">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="9902_31" type="number" id="ecp_9902_31" disabled v-model="ecp_9902_31" @input="handleActionClick_31(this)" @blur="handleActionClick_31(this)" @keyup="handleActionClick_31(this)"  />
          </div>
        </td>
        <td scope="col" id="th23_8">
          <VTextField label="9902_Total" type="number" id="ecp_9902_Total" disabled v-model="ecp_9902_Total" @input="handleActionClick_Total(this)" @blur="handleActionClick_Total(this)" @keyup="handleActionClick_Total(this)"  />
        </td>
      </tr>
      <!-- 990201 | AUMENTO (DISMINUCIÓN) DE CAPITAL SOCIAL | 9 -->
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400">AUMENTO (DISMINUCIÓN) DE CAPITAL SOCIAL</td>
        <td scope="col" width="100" id="th2_9">990201</td>
        <td scope="col" class="text-center" width="150" id="th3_9">
          <VTextField label="990201_301" type="number" id="ecp_990201_301" v-model="ecp_990201_301" @input="handleActionClick_301(this)" @blur="handleActionClick_301(this)" @keyup="handleActionClick_301(this)"  />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_9">
          <VTextField label="990201_302" type="number" id="ecp_990201_302" v-model="ecp_990201_302" @input="handleActionClick_302(this)" @blur="handleActionClick_302(this)" @keyup="handleActionClick_302(this)"  />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_9">
          <VTextField label="990201_303" type="number" id="ecp_990201_303" v-model="ecp_990201_303" @input="handleActionClick_303(this)" @blur="handleActionClick_303(this)" @keyup="handleActionClick_303(this)"  />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_9">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990201_30401" type="number" id="ecp_990201_30401" v-model="ecp_990201_30401" @input="handleActionClick_30401(this)" @blur="handleActionClick_30401(this)" @keyup="handleActionClick_30401(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_9">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990201_30402" type="number" id="ecp_990201_30402" v-model="ecp_990201_30402" @input="handleActionClick_30402(this)" @blur="handleActionClick_30402(this)" @keyup="handleActionClick_30402(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_9">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990201_30501" type="number" id="ecp_990201_30501" v-model="ecp_990201_30501" @input="handleActionClick_30501(this)" @blur="handleActionClick_30501(this)" @keyup="handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_9">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990201_30502" type="number" id="ecp_990201_30502" v-model="ecp_990201_30502" @input="handleActionClick_30502(this)" @blur="handleActionClick_30502(this)" @keyup="handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_9">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990201_30503" type="number" id="ecp_990201_30503" v-model="ecp_990201_30503" @input="handleActionClick_30503(this)" @blur="handleActionClick_30503(this)" @keyup="handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_9">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990201_30504" type="number" id="ecp_990201_30504" v-model="ecp_990201_30504" @input="handleActionClick_30504(this)" @blur="handleActionClick_30504(this)" @keyup="handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_9">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990201_30601" type="number" id="ecp_990201_30601" v-model="ecp_990201_30601" @input="handleActionClick_30601(this)" @blur="handleActionClick_30601(this)" @keyup="handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_9">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990201_30602" type="number" id="ecp_990201_30602" v-model="ecp_990201_30602" @input="handleActionClick_30602(this)" @blur="handleActionClick_30602(this)" @keyup="handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_9">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990201_30603" type="number" id="ecp_990201_30603" v-model="ecp_990201_30603" @input="handleActionClick_30603(this)" @blur="handleActionClick_30603(this)" @keyup="handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_9">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990201_30604" type="number" id="ecp_990201_30604" v-model="ecp_990201_30604" @input="handleActionClick_30604(this)" @blur="handleActionClick_30604(this)" @keyup="handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_9">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990201_30605" type="number" id="ecp_990201_30605" v-model="ecp_990201_30605" @input="handleActionClick_30605(this)" @blur="handleActionClick_30605(this)" @keyup="handleActionClick_30605(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_9">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990201_30606" type="number" id="ecp_990201_30606" v-model="ecp_990201_30606" @input="handleActionClick_30606(this)" @blur="handleActionClick_30606(this)" @keyup="handleActionClick_30606(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_9">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990201_30607" type="number" id="ecp_990201_30607" v-model="ecp_990201_30607" @input="handleActionClick_30607(this)" @blur="handleActionClick_30607(this)" @keyup="handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_9">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990201_30701" type="number" id="ecp_990201_30701" v-model="ecp_990201_30701" @input="handleActionClick_30701(this)" @blur="handleActionClick_30701(this)" @keyup="handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_9">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990201_30702" type="number" id="ecp_990201_30702" v-model="ecp_990201_30702" @input="handleActionClick_30702(this)" @blur="handleActionClick_30702(this)" @keyup="handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_9">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990201_30" type="number" id="ecp_990201_30" disabled  v-model="ecp_990201_30" @input="handleActionClick_30(this)" @blur="handleActionClick_30(this)" @keyup="handleActionClick_30(this)"  />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_9">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990201_31" type="number" id="ecp_990201_31" v-model="ecp_990201_31" @input="handleActionClick_31(this)" @blur="handleActionClick_31(this)" @keyup="handleActionClick_31(this)"  />
          </div>
        </td>
        <td scope="col" id="th23_9">
          <VTextField label="990201_Total" type="number" id="ecp__990201_Total" disabled v-model="ecp_990201_Total" @input="handleActionClick_Total(this)" @blur="handleActionClick_Total(this)" @keyup="handleActionClick_Total(this)"  />
        </td>
      </tr>
      <!-- 990202 | APORTES PARA FUTURAS CAPITALIZACIONES | 10 -->
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400">APORTES PARA FUTURAS CAPITALIZACIONES</td>
        <td scope="col" width="100" id="th2_10">990202</td>
        <td scope="col" class="text-center" width="150" id="th3_10">
          <VTextField label="990202_301" type="number" id="ecp_990202_301" v-model="ecp_990202_301" @input="handleActionClick_301(this)" @blur="handleActionClick_301(this)" @keyup="handleActionClick_301(this)"  />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_10">
          <VTextField label="990202_302" type="number" id="ecp_990202_302" v-model="ecp_990202_302" @input="handleActionClick_302(this)" @blur="handleActionClick_302(this)" @keyup="handleActionClick_302(this)"  />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_10">
          <VTextField label="990202_303" type="number" id="ecp_990202_303" v-model="ecp_990202_303" @input="handleActionClick_303(this)" @blur="handleActionClick_303(this)" @keyup="handleActionClick_303(this)"  />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_10">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990202_30401" type="number" id="ecp_990202_30401" v-model="ecp_990202_30401" @input="handleActionClick_30401(this)" @blur="handleActionClick_30401(this)" @keyup="handleActionClick_30401(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_10">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990202_30402" type="number" id="ecp_990202_30402" v-model="ecp_990202_30402" @input="handleActionClick_30402(this)" @blur="handleActionClick_30402(this)" @keyup="handleActionClick_30402(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_10">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990202_30501" type="number" id="ecp_990202_30501" v-model="ecp_990202_30501" @input="handleActionClick_30501(this)" @blur="handleActionClick_30501(this)" @keyup="handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_10">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990202_30502" type="number" id="ecp_990202_30502" v-model="ecp_990202_30502" @input="handleActionClick_30502(this)" @blur="handleActionClick_30502(this)" @keyup="handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_10">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990202_30503" type="number" id="ecp_990202_30503" v-model="ecp_990202_30503" @input="handleActionClick_30503(this)" @blur="handleActionClick_30503(this)" @keyup="handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_10">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990202_30504" type="number" id="ecp_990202_30504" v-model="ecp_990202_30504" @input="handleActionClick_30504(this)" @blur="handleActionClick_30504(this)" @keyup="handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_10">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990202_30601" type="number" id="ecp_990202_30601" v-model="ecp_990202_30601" @input="handleActionClick_30601(this)" @blur="handleActionClick_30601(this)" @keyup="handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_10">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990202_30602" type="number" id="ecp_990202_30602" v-model="ecp_990202_30602" @input="handleActionClick_30602(this)" @blur="handleActionClick_30602(this)" @keyup="handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_10">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990202_30603" type="number" id="ecp_990202_30603" v-model="ecp_990202_30603" @input="handleActionClick_30603(this)" @blur="handleActionClick_30603(this)" @keyup="handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_10">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990202_30604" type="number" id="ecp_990202_30604" v-model="ecp_990202_30604" @input="handleActionClick_30604(this)" @blur="handleActionClick_30604(this)" @keyup="handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_10">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990202_30605" type="number" id="ecp_990202_30605" v-model="ecp_990202_30605" @input="handleActionClick_30605(this)" @blur="handleActionClick_30605(this)" @keyup="handleActionClick_30605(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_10">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990202_30606" type="number" id="ecp_990202_30606" v-model="ecp_990202_30606" @input="handleActionClick_30603(this)" @blur="handleActionClick_30603(this)" @keyup="handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_10">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990202_30607" type="number" id="ecp_990202_30607" v-model="ecp_990202_30607" @input="handleActionClick_30607(this)" @blur="handleActionClick_30607(this)" @keyup="handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_10">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990202_30701" type="number" id="ecp_990202_30701" v-model="ecp_990202_30701" @input="handleActionClick_30701(this)" @blur="handleActionClick_30701(this)" @keyup="handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_10">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990202_30702" type="number" id="ecp_990202_30702" v-model="ecp_990202_30702" @input="handleActionClick_30702(this)" @blur="handleActionClick_30702(this)" @keyup="handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_10">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990202_30" type="number" id="ecp_990202_30" disabled  v-model="ecp_990202_30" @input="handleActionClick_30(this)" @blur="handleActionClick_30(this)" @keyup="handleActionClick_30(this)"  />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_10">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990202_31" type="number" id="ecp_990202_31" v-model="ecp_990202_31" @input="handleActionClick_31(this)" @blur="handleActionClick_31(this)" @keyup="handleActionClick_31(this)"  />
          </div>
        </td>
        <td scope="col" id="th23_10">
          <VTextField label="990202_Total" type="number" disabled id="ecp_990202_Total" v-model="ecp_990202_Total" @input="handleActionClick_Total(this)" @blur="handleActionClick_Total(this)" @keyup="handleActionClick_Total(this)"  />
        </td>
      </tr>
      <!-- 990203 | PRIMA POR EMISIÓN PRIMARIA DE ACCIONES | 11 -->
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400">PRIMA POR EMISIÓN PRIMARIA DE ACCIONES</td>
        <td scope="col" width="100" id="th2_11">990203</td>
        <td scope="col" class="text-center" width="150" id="th3_11">
          <VTextField label="990203_301" type="number" id="ecp_990203_301" v-model="ecp_990203_301" @input="handleActionClick_301(this)" @blur="handleActionClick_301(this)" @keyup="handleActionClick_301(this)"  />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_11">
          <VTextField label="990203_302" type="number" id="ecp_990203_302" v-model="ecp_990203_302" @input="handleActionClick_302(this)" @blur="handleActionClick_302(this)" @keyup="handleActionClick_302(this)"  />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_11">
          <VTextField label="990203_303" type="number" id="ecp_990203_303" v-model="ecp_990203_303" @input="handleActionClick_303(this)" @blur="handleActionClick_303(this)" @keyup="handleActionClick_303(this)"  />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_11">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990203_30401" type="number" id="ecp_990203_30401" v-model="ecp_990203_30401" @input="handleActionClick_30401(this)" @blur="handleActionClick_30401(this)" @keyup="handleActionClick_30401(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_11">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990203_30402" type="number" id="ecp_990203_30402" v-model="ecp_990203_30402" @input="handleActionClick_30402(this)" @blur="handleActionClick_30402(this)" @keyup="handleActionClick_30402(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_11">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990203_30501" type="number" id="ecp_990203_30501" v-model="ecp_990203_30501" @input="handleActionClick_30501(this)" @blur="handleActionClick_30501(this)" @keyup="handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_11">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990203_30502" type="number" id="ecp_990203_30502" v-model="ecp_990203_30502" @input="handleActionClick_30502(this)" @blur="handleActionClick_30502(this)" @keyup="handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_11">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990203_30503" type="number" id="ecp_990203_30503" v-model="ecp_990203_30503" @input="handleActionClick_30503(this)" @blur="handleActionClick_30503(this)" @keyup="handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_11">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990203_30504" type="number" id="ecp_990203_30504" v-model="ecp_990203_30504" @input="handleActionClick_30504(this)" @blur="handleActionClick_30504(this)" @keyup="handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_11">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990203_30601" type="number" id="ecp_990203_30601" v-model="ecp_990203_30601" @input="handleActionClick_30601(this)" @blur="handleActionClick_30601(this)" @keyup="handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_11">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990203_30602" type="number" id="ecp_990203_30602" v-model="ecp_990203_30602" @input="handleActionClick_30602(this)" @blur="handleActionClick_30602(this)" @keyup="handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_11">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990203_30603" type="number" id="ecp_990203_30603" v-model="ecp_990203_30603" @input="handleActionClick_30603(this)" @blur="handleActionClick_30603(this)" @keyup="handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_11">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990203_30604" type="number" id="ecp_990203_30604" v-model="ecp_990203_30604" @input="handleActionClick_30604(this)" @blur="handleActionClick_30604(this)" @keyup="handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_11">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990203_30605" type="number" id="ecp_990203_30605" v-model="ecp_990203_30605" @input="handleActionClick_30605(this)" @blur="handleActionClick_30605(this)" @keyup="handleActionClick_30605(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_11">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990203_30606" type="number" id="ecp_990203_30606" v-model="ecp_990203_30606" @input="handleActionClick_30606(this)" @blur="handleActionClick_30606(this)" @keyup="handleActionClick_30606(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_11">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990203_30607" type="number" id="ecp_990203_30607" v-model="ecp_990203_30607" @input="handleActionClick_30607(this)" @blur="handleActionClick_30607(this)" @keyup="handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_11">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990203_30701" type="number" id="ecp_990203_30701" v-model="ecp_990203_30701" @input="handleActionClick_30701(this)" @blur="handleActionClick_30701(this)" @keyup="handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_11">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990203_30702" type="number" id="ecp_990203_30702" v-model="ecp_990203_30702" @input="handleActionClick_30702(this)" @blur="handleActionClick_30702(this)" @keyup="handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_11">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990203_30" type="number" id="ecp_990203_30" disabled  v-model="ecp_990203_30" @input="handleActionClick_30(this)" @blur="handleActionClick_30(this)" @keyup="handleActionClick_30(this)"  />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_11">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990203_31" type="number" id="ecp_990203_31" v-model="ecp_990203_31" @input="handleActionClick_31(this)" @blur="handleActionClick_31(this)" @keyup="handleActionClick_31(this)"  />
          </div>
        </td>
        <td scope="col" id="th23_11">
          <VTextField label="990203_Total" type="number" disabled id="ecp_990203_Total" v-model="ecp_990203_Total" @input="handleActionClick_Total(this)" @blur="handleActionClick_Total(this)" @keyup="handleActionClick_Total(this)"  />
        </td>
      </tr>
      <!-- 990204 | DIVIDENDOS | 12 -->
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400" id="th1_12">DIVIDENDOS</td>
        <td scope="col" width="100" id="th2_12">990204</td>
        <td scope="col" class="text-center" width="150" id="th3_12">
          <VTextField label="990204_301" type="number" id="ecp_990204_301" v-model="ecp_990204_301" @input="convertirNegativo_990204_301(this); handleActionClick_301(this)"  />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_12">
          <VTextField label="990204_302" type="number" id="ecp_990204_302" v-model="ecp_990204_302" @input="convertirNegativo_990204_302(this); handleActionClick_302(this)"  />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_12">
          <VTextField label="990204_303" type="number" id="ecp_990204_303" v-model="ecp_990204_303" @input="convertirNegativo_990204_303(this); handleActionClick_303(this)"  />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_12">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990204_30401" type="number" id="ecp_990204_30401" v-model="ecp_990204_30401" @input="convertirNegativo_990204_30401(this); handleActionClick_30401(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_12">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990204_30402" type="number" id="ecp_990204_30402" v-model="ecp_990204_30402" @input="convertirNegativo_990204_30402(this); handleActionClick_30402(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_12">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990204_30501" type="number" id="ecp_990204_30501" v-model="ecp_990204_30501" @input="convertirNegativo_990204_30501(this); handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;"  id="th9_12">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990204_30502" type="number" id="ecp_990204_30502" v-model="ecp_990204_30502" @input="convertirNegativo_990204_30502(this); handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_12">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990204_30503" type="number" id="ecp_990204_30503" v-model="ecp_990204_30503" @input="convertirNegativo_990204_30503(this); handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_12">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990204_30504" type="number" id="ecp_990204_30504" v-model="ecp_990204_30504" @input="convertirNegativo_990204_30504(this); handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_12">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990204_30601" type="number" id="ecp_990204_30601" v-model="ecp_990204_30601" @input="convertirNegativo_990204_30601(this); handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_12">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990204_30602" type="number" id="ecp_990204_30602" v-model="ecp_990204_30602" @input="convertirNegativo_990204_30602(this); handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_12">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990204_30603" type="number" id="ecp_990204_30603" v-model="ecp_990204_30603" @input="convertirNegativo_990204_30603(this); handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_12">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990204_30604" type="number" id="ecp_990204_30604" v-model="ecp_990204_30604" @input="convertirNegativo_990204_30604(this); handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_12">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990204_30605" type="number" id="ecp_990204_30605" v-model="ecp_990204_30605" @input="convertirNegativo_990204_30605(this); handleActionClick_30605(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_12">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990204_30606" type="number" id="ecp_990204_30606" v-model="ecp_990204_30606" @input="convertirNegativo_990204_30606(this); handleActionClick_30606(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_12">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990204_30607" type="number" id="ecp_990204_30607" v-model="ecp_990204_30607" @input="convertirNegativo_990204_30607(this); handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_12">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990204_30701" type="number" id="ecp_990204_30701" v-model="ecp_990204_30701" @input="convertirNegativo_990204_30701(this); handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_12">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990204_30702" type="number" id="ecp_990204_30702" v-model="ecp_990204_30702" @input="convertirNegativo_990204_30702(this); handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_12">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990204_30" type="number" id="ecp_990204_30" disabled  v-model="ecp_990204_30" @input="convertirNegativo_990204_30(this); handleActionClick_30(this)"  />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_12">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990204_31" type="number" id="ecp_990204_31" v-model="ecp_990204_31" @input="convertirNegativo_990204_31(this); handleActionClick_31(this)"  />
          </div>
        </td>
        <td scope="col" id="th23_12">
          <VTextField label="990204_Total" type="number" disabled id="ecp_990204_Total" v-model="ecp_990204_Total" @input="handleActionClick_Total(this)" @blur="handleActionClick_Total(this)" @keyup="handleActionClick_Total(this)"  />
        </td>
      </tr>
      <!-- 990205 | TRANSFERENCIA DE RESULTADOS <br/>A OTRAS CUENTAS PATRIMONIALES | 13 -->
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400">TRANSFERENCIA DE RESULTADOS <br/>A OTRAS CUENTAS PATRIMONIALES</td>
        <td scope="col" width="100" id="th2_13">990205</td>
        <td scope="col" class="text-center" width="150" id="th3_13">
          <VTextField label="990205_301" type="number" id="ecp_990205_301" v-model="ecp_990205_301" @input="handleActionClick_301(this)" @blur="handleActionClick_301(this)" @keyup="handleActionClick_301(this)"  />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_13">
          <VTextField label="990205_302" type="number" id="ecp_990205_302" v-model="ecp_990205_302" @input="handleActionClick_302(this)" @blur="handleActionClick_302(this)" @keyup="handleActionClick_302(this)"  />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_13">
          <VTextField label="990205_303" type="number" id="ecp_990205_303" v-model="ecp_990205_303" @input="handleActionClick_303(this)" @blur="handleActionClick_303(this)" @keyup="handleActionClick_303(this)"  />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_13">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990205_30401" type="number" id="ecp_990205_30401" v-model="ecp_990205_30401" @input="handleActionClick_30401(this)" @blur="handleActionClick_30401(this)" @keyup="handleActionClick_30401(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_13">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990205_30402" type="number" id="ecp_990205_30402" v-model="ecp_990205_30402" @input="handleActionClick_30402(this)" @blur="handleActionClick_30402(this)" @keyup="handleActionClick_30402(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_13">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990205_30501" type="number" id="ecp_990205_30501" v-model="ecp_990205_30501" @input="handleActionClick_30501(this)" @blur="handleActionClick_30501(this)" @keyup="handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_13">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990205_30502" type="number" id="ecp_990205_30502" v-model="ecp_990205_30502" @input="handleActionClick_30502(this)" @blur="handleActionClick_30502(this)" @keyup="handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_13">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990205_30503" type="number" id="ecp_990205_30503" v-model="ecp_990205_30503" @input="handleActionClick_30503(this)" @blur="handleActionClick_30503(this)" @keyup="handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_13">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990205_30504" type="number" id="ecp_990205_30504" v-model="ecp_990205_30504" @input="handleActionClick_30504(this)" @blur="handleActionClick_30504(this)" @keyup="handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_13">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990205_3060" type="number" id="ecp_990205_30601" v-model="ecp_990205_30601" @input="handleActionClick_30601(this)" @blur="handleActionClick_30601(this)" @keyup="handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_13">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990205_30602" type="number" id="ecp_990205_30602" v-model="ecp_990205_30602" @input="handleActionClick_30602(this)" @blur="handleActionClick_30602(this)" @keyup="handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_13">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990205_30603" type="number" id="ecp_990205_30603" v-model="ecp_990205_30603" @input="handleActionClick_30603(this)" @blur="handleActionClick_30603(this)" @keyup="handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_13">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990205_30604" type="number" id="ecp_990205_30604" v-model="ecp_990205_30604" @input="handleActionClick_30604(this)" @blur="handleActionClick_30604(this)" @keyup="handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_13">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990205_30605" type="number" id="ecp_990205_30605" v-model="ecp_990205_30605" @input="handleActionClick_30605(this)" @blur="handleActionClick_30605(this)" @keyup="handleActionClick_30605(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_13">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990205_30606" type="number" id="ecp_990205_30606" v-model="ecp_990205_30606" @input="handleActionClick_30606(this)" @blur="handleActionClick_30606(this)" @keyup="handleActionClick_30606(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_13">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990205_30607" type="number" id="ecp_990205_30607" v-model="ecp_990205_30607" @input="handleActionClick_30607(this)" @blur="handleActionClick_30607(this)" @keyup="handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_13">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990205_30701" type="number" id="ecp_990205_30701" v-model="ecp_990205_30701" @input="handleActionClick_30701(this)" @blur="handleActionClick_30701(this)" @keyup="handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_13">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990205_30702" type="number" id="ecp_990205_30702" v-model="ecp_990205_30702" @input="handleActionClick_30702(this)" @blur="handleActionClick_30702(this)" @keyup="handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_13">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990205_30" type="number" id="ecp_990205_30" disabled  v-model="ecp_990205_30" @input="handleActionClick_30(this)" @blur="handleActionClick_30(this)" @keyup="handleActionClick_30(this)"  />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_13">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990205_31" type="number" id="ecp_990205_31" v-model="ecp_990205_31" @input="handleActionClick_31(this)" @blur="handleActionClick_31(this)" @keyup="handleActionClick_31(this)"  />
          </div>
        </td>
        <td scope="col" id="th23_13">
          <VTextField label="990205_Total" type="number" disabled id="ecp_990205_Total" v-model="ecp_990205_Total" @input="handleActionClick_Total(this)" @blur="handleActionClick_Total(this)" @keyup="handleActionClick_Total(this)"  />
        </td>
      </tr>
      <!-- 990206 | REALIZACIÓN DE LA RESERVA POR VALUACIÓN DE ACTIVOS FINANCIEROS DISPONIBLES PARA LA VENTA | 14 -->
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400">REALIZACIÓN DE LA RESERVA POR <br/>VALUACIÓN DE ACTIVOS FINANCIEROS <br/>DISPONIBLES PARA LA VENTA</td>
        <td scope="col" width="100" id="th2_14">990206</td>
        <td scope="col" class="text-center" width="150" id="th3_14">
          <VTextField label="990206_301" type="number" id="ecp_990206_301" v-model="ecp_990206_301" @input="handleActionClick_301(this)" @blur="handleActionClick_301(this)" @keyup="handleActionClick_301(this)"  />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_14">
          <VTextField label="990206_302" type="number" id="ecp_990206_302" v-model="ecp_990206_302" @input="handleActionClick_302(this)" @blur="handleActionClick_302(this)" @keyup="handleActionClick_302(this)"  />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_14">
          <VTextField label="990206_303" type="number" id="ecp_990206_303" v-model="ecp_990206_303" @input="handleActionClick_303(this)" @blur="handleActionClick_303(this)" @keyup="handleActionClick_303(this)"  />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_14">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990206_30401" type="number" id="ecp_990206_30401" v-model="ecp_990206_30401" @input="handleActionClick_30401(this)" @blur="handleActionClick_30401(this)" @keyup="handleActionClick_30401(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_14">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990206_30402" type="number" id="ecp_990206_30402" v-model="ecp_990206_30402" @input="handleActionClick_30402(this)" @blur="handleActionClick_30402(this)" @keyup="handleActionClick_30402(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_14">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990206_30501" type="number" id="ecp_990206_30501" v-model="ecp_990206_30501" @input="handleActionClick_30501(this)" @blur="handleActionClick_30501(this)" @keyup="handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_14">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990206_30502" type="number" id="ecp_990206_30502" v-model="ecp_990206_30502" @input="handleActionClick_30502(this)" @blur="handleActionClick_30502(this)" @keyup="handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_14">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990206_30503" type="number" id="ecp_990206_30503" v-model="ecp_990206_30503" @input="handleActionClick_30503(this)" @blur="handleActionClick_30503(this)" @keyup="handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_14">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990206_30504" type="number" id="ecp_990206_30504" v-model="ecp_990206_30504" @input="handleActionClick_30504(this)" @blur="handleActionClick_30504(this)" @keyup="handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_14">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990206_30601" type="number" id="ecp_990206_30601" v-model="ecp_990206_30601" @input="handleActionClick_30601(this)" @blur="handleActionClick_30601(this)" @keyup="handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_14">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990206_30602" type="number" id="ecp_990206_30602" v-model="ecp_990206_30602" @input="handleActionClick_30602(this)" @blur="handleActionClick_30602(this)" @keyup="handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_14">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990206_30603" type="number" id="ecp_990206_30603" v-model="ecp_990206_30603" @input="handleActionClick_30603(this)" @blur="handleActionClick_30603(this)" @keyup="handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_14">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990206_30604" type="number" id="ecp_990206_30604" v-model="ecp_990206_30604" @input="handleActionClick_30604(this)" @blur="handleActionClick_30604(this)" @keyup="handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_14">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990206_30605" type="number" id="ecp_990206_30605" v-model="ecp_990206_30605" @input="handleActionClick_30605(this)" @blur="handleActionClick_30605(this)" @keyup="handleActionClick_30605(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_14">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990206_30606" type="number" id="ecp_990206_30606" v-model="ecp_990206_30606" @input="handleActionClick_30606(this)" @blur="handleActionClick_30606(this)" @keyup="handleActionClick_30606(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_14">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990206_30607" type="number" id="ecp_990206_30607" v-model="ecp_990206_30607" @input="handleActionClick_30607(this)" @blur="handleActionClick_30607(this)" @keyup="handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_14">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990206_30701" type="number" id="ecp_990206_30701" v-model="ecp_990206_30701" @input="handleActionClick_30701(this)" @blur="handleActionClick_30701(this)" @keyup="handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_14">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990206_30702" type="number" id="ecp_990206_30702" v-model="ecp_990206_30702" @input="handleActionClick_30702(this)" @blur="handleActionClick_30702(this)" @keyup="handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_14">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990206_30" type="number" id="ecp_990206_30" disabled  v-model="ecp_990206_30" @input="handleActionClick_30(this)" @blur="handleActionClick_30(this)" @keyup="handleActionClick_30(this)"  />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_14">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990206_31" type="number" id="ecp_990206_31" v-model="ecp_990206_31" @input="handleActionClick_31(this)" @blur="handleActionClick_31(this)" @keyup="handleActionClick_31(this)"  />
          </div>
        </td>
        <td scope="col" id="th23_14">
          <VTextField label="990206_Total" type="number" disabled id="ecp_990206_Total" v-model="ecp_990206_Total" />
        </td>
      </tr>
      <!-- 990207 | REALIZACIÓN DE LA RESERVA POR VALUACIÓN DE PROPIEDADES, PLANTA Y EQUIPO | 15 -->
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400">REALIZACIÓN DE LA RESERVA POR <br/>VALUACIÓN DE PROPIEDADES, PLANTA Y EQUIPO</td>
        <td scope="col" width="100" id="th2_15">990207</td>
        <td scope="col" class="text-center" width="150" id="th3_15">
          <VTextField label="990207_301" type="number" id="ecp_990207_301" v-model="ecp_990207_301" @input="handleActionClick_301(this)" @blur="handleActionClick_301(this)" @keyup="handleActionClick_301(this)"  />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_15">
          <VTextField label="990207_302" type="number" id="ecp_990207_302" v-model="ecp_990207_302" @input="handleActionClick_302(this)" @blur="handleActionClick_302(this)" @keyup="handleActionClick_302(this)"  />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_15">
          <VTextField label="990207_303" type="number" id="ecp_990207_303" v-model="ecp_990207_303" @input="handleActionClick_303(this)" @blur="handleActionClick_303(this)" @keyup="handleActionClick_303(this)"  />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_15">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990207_30401" type="number" id="ecp_990207_30401" v-model="ecp_990207_30401" @input="handleActionClick_30401(this)" @blur="handleActionClick_30401(this)" @keyup="handleActionClick_30401(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_15">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990207_30402" type="number" id="ecp_990207_30402" v-model="ecp_990207_30402" @input="handleActionClick_30402(this)" @blur="handleActionClick_30402(this)" @keyup="handleActionClick_30402(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_15">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990207_30501" type="number" id="ecp_990207_30501" v-model="ecp_990207_30501" @input="handleActionClick_30501(this)" @blur="handleActionClick_30501(this)" @keyup="handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_15">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990207_30502" type="number" id="ecp_990207_30502" v-model="ecp_990207_30502" @input="handleActionClick_30502(this)" @blur="handleActionClick_30502(this)" @keyup="handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_15">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990207_30503" type="number" id="ecp_990207_30503" v-model="ecp_990207_30503" @input="handleActionClick_30503(this)" @blur="handleActionClick_30503(this)" @keyup="handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_15">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990207_30504" type="number" id="ecp_990207_30504" v-model="ecp_990207_30504" @input="handleActionClick_30504(this)" @blur="handleActionClick_30504(this)" @keyup="handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_15">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990207_30601" type="number" id="ecp_990207_30601" v-model="ecp_990207_30601" @input="handleActionClick_30601(this)" @blur="handleActionClick_30601(this)" @keyup="handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_15">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990207_30602" type="number" id="ecp_990207_30602" v-model="ecp_990207_30602" @input="handleActionClick_30602(this)" @blur="handleActionClick_30602(this)" @keyup="handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_15">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990207_30603" type="number" id="ecp_990207_30603" v-model="ecp_990207_30603" @input="handleActionClick_30603(this)" @blur="handleActionClick_30603(this)" @keyup="handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_15">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990207_30604" type="number" id="ecp_990207_30604" v-model="ecp_990207_30604" @input="handleActionClick_30604(this)" @blur="handleActionClick_30604(this)" @keyup="handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_15">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990207_30605" type="number" id="ecp_990207_30605" v-model="ecp_990207_30605" @input="handleActionClick_30605(this)" @blur="handleActionClick_30605(this)" @keyup="handleActionClick_30605(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_15">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990207_30606" type="number" id="ecp_990207_30606" v-model="ecp_990207_30606" @input="handleActionClick_30606(this)" @blur="handleActionClick_30606(this)" @keyup="handleActionClick_30606(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_15">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990207_30607" type="number" id="ecp_990207_30607" v-model="ecp_990207_30607" @input="handleActionClick_30607(this)" @blur="handleActionClick_30607(this)" @keyup="handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_15">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990207_30701" type="number" id="ecp_990207_30701" v-model="ecp_990207_30701" @input="handleActionClick_30701(this)" @blur="handleActionClick_30701(this)" @keyup="handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_15">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990207_30702" type="number" id="ecp_990207_30702" v-model="ecp_990207_30702" @input="handleActionClick_30702(this)" @blur="handleActionClick_30702(this)" @keyup="handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_15">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990207_30" type="number" id="ecp_990207_30"  disabled v-model="ecp_990207_30" @input="handleActionClick_30(this)" @blur="handleActionClick_30(this)" @keyup="handleActionClick_30(this)"  />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_15">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990207_31" type="number" id="ecp_990207_31" v-model="ecp_990207_31" @input="handleActionClick_31(this)" @blur="handleActionClick_31(this)" @keyup="handleActionClick_31(this)"  />
          </div>
        </td>
        <td scope="col" id="th23_15">
          <VTextField label="990207_Total" type="number" disabled id="ecp_990207_Total" v-model="ecp_990207_Total" @input="handleActionClick_Total(this)" @blur="handleActionClick_Total(this)" @keyup="handleActionClick_Total(this)"  />
        </td>
      </tr>
      <!-- 990208 | REALIZACIÓN DE LA RESERVA POR VALUACIÓN DE ACTIVOS INTANGIBLES | 16 -->
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400">REALIZACIÓN DE LA RESERVA POR <br/>VALUACIÓN DE ACTIVOS INTANGIBLES</td>
        <td scope="col" width="100" id="th2_16">990208</td>
        <td scope="col" class="text-center" width="150" id="th3_16">
          <VTextField label="990208_301" type="number" id="ecp_990208_301" v-model="ecp_990208_301" @input="handleActionClick_301(this)" @blur="handleActionClick_301(this)" @keyup="handleActionClick_301(this)"  />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_16">
          <VTextField label="990208_302" type="number" id="ecp_990208_302" v-model="ecp_990208_302" @input="handleActionClick_302(this)" @blur="handleActionClick_302(this)" @keyup="handleActionClick_302(this)"  />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_16">
          <VTextField label="990208_303" type="number" id="ecp_990208_303" v-model="ecp_990208_303" @input="handleActionClick_303(this)" @blur="handleActionClick_303(this)" @keyup="handleActionClick_303(this)"  />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_16">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990208_30401" type="number" id="ecp_990208_30401" v-model="ecp_990208_30401" @input="handleActionClick_30401(this)" @blur="handleActionClick_30401(this)" @keyup="handleActionClick_30401(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_16">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990208_30402" type="number" id="ecp_990208_30402" v-model="ecp_990208_30402" @input="handleActionClick_30402(this)" @blur="handleActionClick_30402(this)" @keyup="handleActionClick_30402(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_16">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990208_30501" type="number" id="ecp_990208_30501" v-model="ecp_990208_30501" @input="handleActionClick_30501(this)" @blur="handleActionClick_30501(this)" @keyup="handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_16">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990208_30502" type="number" id="ecp_990208_30502" v-model="ecp_990208_30502" @input="handleActionClick_30502(this)" @blur="handleActionClick_30502(this)" @keyup="handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_16">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990208_30503" type="number" id="ecp_990208_30503" v-model="ecp_990208_30503" @input="handleActionClick_30503(this)" @blur="handleActionClick_30503(this)" @keyup="handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_16">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990208_30504" type="number" id="ecp_990208_30504" v-model="ecp_990208_30504" @input="handleActionClick_30504(this)" @blur="handleActionClick_30504(this)" @keyup="handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_16">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990208_30601" type="number" id="ecp_990208_30601" v-model="ecp_990208_30601" @input="handleActionClick_30601(this)" @blur="handleActionClick_30601(this)" @keyup="handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_16">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990208_30602" type="number" id="ecp_990208_30602" v-model="ecp_990208_30602" @input="handleActionClick_30602(this)" @blur="handleActionClick_30602(this)" @keyup="handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_16">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990208_30603" type="number" id="ecp_990208_30603" v-model="ecp_990208_30603" @input="handleActionClick_30603(this)" @blur="handleActionClick_30603(this)" @keyup="handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_16">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990208_30604" type="number" id="ecp_990208_30604" v-model="ecp_990208_30604" @input="handleActionClick_30604(this)" @blur="handleActionClick_30604(this)" @keyup="handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_16">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990208_30605" type="number" id="ecp_990208_30605" v-model="ecp_990208_30605" @input="handleActionClick_30605(this)" @blur="handleActionClick_30605(this)" @keyup="handleActionClick_30605(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_16">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990208_30606" type="number" id="ecp_990208_30606" v-model="ecp_990208_30606" @input="handleActionClick_30606(this)" @blur="handleActionClick_30606(this)" @keyup="handleActionClick_30606(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_16">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990208_30607" type="number" id="ecp_990208_30607" v-model="ecp_990208_30607" @input="handleActionClick_30607(this)" @blur="handleActionClick_30607(this)" @keyup="handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_16">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990208_30701" type="number" id="ecp_990208_30701" v-model="ecp_990208_30701" @input="handleActionClick_30701(this)" @blur="handleActionClick_30701(this)" @keyup="handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_16">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990208_30702" type="number" id="ecp_990208_30702" v-model="ecp_990208_30702" @input="handleActionClick_30702(this)" @blur="handleActionClick_30702(this)" @keyup="handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_16">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990208_30" type="number" id="ecp_990208_30"  disabled v-model="ecp_990208_30" @input="handleActionClick_30(this)" @blur="handleActionClick_30(this)" @keyup="handleActionClick_30(this)"  />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_16">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990208_31" type="number" id="ecp_990208_31" v-model="ecp_990208_31" @input="handleActionClick_31(this)" @blur="handleActionClick_31(this)" @keyup="handleActionClick_31(this)"  />
          </div>
        </td>
        <td scope="col" id="th23_16">
          <VTextField label="990208_Total" type="number" disabled id="ecp_990208_Total" v-model="ecp_990208_Total" @input="handleActionClick_Total(this)" @blur="handleActionClick_Total(this)" @keyup="handleActionClick_Total(this)"  />
        </td>
      </tr>
      <!-- OTROS CAMBIOS (DETALLAR) | 17 -->
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400">OTROS CAMBIOS (DETALLAR)</td>
        <td scope="col" width="100" id="th2_17">990209</td>
        <td scope="col" class="text-center" width="150" id="th3_17">
          <VTextField label="990209_301" type="number" id="ecp_990209_301" v-model="ecp_990209_301" @input="handleActionClick_301(this)" @blur="handleActionClick_301(this)" @keyup="handleActionClick_301(this)"  />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_17">
          <VTextField label="990209_302" type="number" id="ecp_990209_302" v-model="ecp_990209_302" @input="handleActionClick_302(this)" @blur="handleActionClick_302(this)" @keyup="handleActionClick_302(this)"  />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_17">
          <VTextField label="990209_303" type="number" id="ecp_990209_303" v-model="ecp_990209_303" @input="handleActionClick_303(this)" @blur="handleActionClick_303(this)" @keyup="handleActionClick_303(this)"  />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_17">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990209_30401" type="number" id="ecp_990209_30401" v-model="ecp_990209_30401" @input="handleActionClick_30401(this)" @blur="handleActionClick_30401(this)" @keyup="handleActionClick_30401(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_17">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990209_30402" type="number" id="ecp_990209_30402" v-model="ecp_990209_30402" @input="handleActionClick_30402(this)" @blur="handleActionClick_30402(this)" @keyup="handleActionClick_30402(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_17">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990209_30501" type="number" id="ecp_990209_30501" v-model="ecp_990209_30501" @input="handleActionClick_30501(this)" @blur="handleActionClick_30501(this)" @keyup="handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_17">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990209_30502" type="number" id="ecp_990209_30502" v-model="ecp_990209_30502" @input="handleActionClick_30502(this)" @blur="handleActionClick_30502(this)" @keyup="handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_17">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990209_30503" type="number" id="ecp_990209_30503" v-model="ecp_990209_30503" @input="handleActionClick_30503(this)" @blur="handleActionClick_30503(this)" @keyup="handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_17">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990209_30504" type="number" id="ecp_990209_30504" v-model="ecp_990209_30504" @input="handleActionClick_30504(this)" @blur="handleActionClick_30504(this)" @keyup="handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_17">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990209_30601" type="number" id="ecp_990209_30601" v-model="ecp_990209_30601" @input="handleActionClick_30601(this)" @blur="handleActionClick_30601(this)" @keyup="handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_17">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990209_30602" type="number" id="ecp_990209_30602" v-model="ecp_990209_30602" @input="handleActionClick_30602(this)" @blur="handleActionClick_30602(this)" @keyup="handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_17">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990209_30603" type="number" id="ecp_990209_30603" v-model="ecp_990209_30603" @input="handleActionClick_30603(this)" @blur="handleActionClick_30603(this)" @keyup="handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_17">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990209_30604" type="number" id="ecp_990209_30604" v-model="ecp_990209_30604" @input="handleActionClick_30604(this)" @blur="handleActionClick_30604(this)" @keyup="handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_17">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990209_30605" type="number" id="ecp_990209_30605" v-model="ecp_990209_30605" @input="handleActionClick_30605(this)" @blur="handleActionClick_30605(this)" @keyup="handleActionClick_30605(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_17">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990209_30606" type="number" id="ecp_990209_30606" v-model="ecp_990209_30606" @input="handleActionClick_30606(this)" @blur="handleActionClick_30606(this)" @keyup="handleActionClick_30606(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_17">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990209_30607" type="number" id="ecp_990209_30607" v-model="ecp_990209_30607" @input="handleActionClick_30607(this)" @blur="handleActionClick_30607(this)" @keyup="handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_17">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990209_30701" type="number" id="ecp_990209_30701" v-model="ecp_990209_30701" @input="handleActionClick_30701(this)" @blur="handleActionClick_30701(this)" @keyup="handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_17">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990209_30702" type="number" id="ecp_990209_30702" v-model="ecp_990209_30702" @input="handleActionClick_30702(this)" @blur="handleActionClick_30702(this)" @keyup="handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_17">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField disabled label="990209_30" type="number" id="ecp_990209_30" v-model="ecp_990209_30" @input="handleActionClick_30(this)" @blur="handleActionClick_30(this)" @keyup="handleActionClick_30(this)"  />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_17">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="990209_31" type="number" id="ecp_990209_31" v-model="ecp_990209_31" @input="handleActionClick_31(this)" @blur="handleActionClick_31(this)" @keyup="handleActionClick_31(this)"  />
          </div>
        </td>
        <td scope="col" id="th23_17">
          <VTextField disabled label="990209_Total" type="number" id="ecp_990209_Total" v-model="ecp_990209_Total" @input="handleActionClick_Total(this)" @blur="handleActionClick_Total(this)" @keyup="handleActionClick_Total(this)"  />
        </td>
      </tr>
      <!-- AGREGADAS PARA IFLUC EXCLUSIVAMENTE -->
      <!-- 99020901 | TRANSFERENCIAS A CUENTAS DE ACTIVOS Y PASIVOS | 18
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400">TRANSFERENCIAS A CUENTAS DE ACTIVOS Y PASIVOS</td>
        <td scope="col" width="100" id="th2_20">99020901</td>
        <td scope="col" class="text-center" width="150" id="th3_20">
          <VTextField label="99020901_301" type="number" id="ecp_99020901_301" v-model="ecp_99020901_301" @input="handleActionClick_Totalizar990209(this); handleActionClick_301(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_301(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_301(this)"  />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_20">
          <VTextField label="99020901_302" type="number" id="ecp_99020901_302" v-model="ecp_99020901_302" @input="handleActionClick_Totalizar990209(this); handleActionClick_302(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_302(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_302(this)"  />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_20">
          <VTextField label="99020901_303" type="number" id="ecp_99020901_303" v-model="ecp_99020901_303" @input="handleActionClick_Totalizar990209(this); handleActionClick_303(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_303(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_303(this)"  />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_20">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020901_30401" type="number" id="ecp_99020901_30401" v-model="ecp_99020901_30401" @input="handleActionClick_Totalizar990209(this); handleActionClick_30401(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30401(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30401(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_20">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020901_30402" type="number" id="ecp_99020901_30402" v-model="ecp_99020901_30402" @input="handleActionClick_Totalizar990209(this); handleActionClick_30402(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30402(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30402(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_20">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020901_30501" type="number" id="ecp_99020901_30501" v-model="ecp_99020901_30501" @input="handleActionClick_Totalizar990209(this); handleActionClick_30501(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30501(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_20">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020901_30502" type="number" id="ecp_99020901_30502" v-model="ecp_99020901_30502" @input="handleActionClick_Totalizar990209(this); handleActionClick_30502(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30502(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_20">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020901_30503" type="number" id="ecp_99020901_30503" v-model="ecp_99020901_30503" @input="handleActionClick_Totalizar990209(this); handleActionClick_30503(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30503(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_20">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020901_30504" type="number" id="ecp_99020901_30504" v-model="ecp_99020901_30504" @input="handleActionClick_Totalizar990209(this); handleActionClick_30504(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30504(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_20">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020901_30601" type="number" id="ecp_99020901_30601" v-model="ecp_99020901_30601" @input="handleActionClick_Totalizar990209(this); handleActionClick_30601(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30601(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_20">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020901_30602" type="number" id="ecp_99020901_30602" v-model="ecp_99020901_30602" @input="handleActionClick_Totalizar990209(this); handleActionClick_30602(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30602(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_20">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020901_30603" type="number" id="ecp_99020901_30603" v-model="ecp_99020901_30603" @input="handleActionClick_Totalizar990209(this); handleActionClick_30603(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30603(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_20">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020901_30604" type="number" id="ecp_99020901_30604" v-model="ecp_99020901_30604" @input="handleActionClick_Totalizar990209(this); handleActionClick_30604(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30604(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_20">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020901_30605" type="number" id="ecp_99020901_30605" v-model="ecp_99020901_30605" @input="handleActionClick_Totalizar990209(this); handleActionClick_30605(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30605(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30605(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_20">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020901_30606" type="number" id="ecp_99020901_30606" v-model="ecp_99020901_30606" @input="handleActionClick_Totalizar990209(this); handleActionClick_30606(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30606(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30606(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_20">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020901_30607" type="number" id="ecp_99020901_30607" v-model="ecp_99020901_30607" @input="handleActionClick_Totalizar990209(this); handleActionClick_30607(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30607(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_20">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020901_30701" type="number" id="ecp_99020901_30701" v-model="ecp_99020901_30701" @input="handleActionClick_Totalizar990209(this); handleActionClick_30701(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30701(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_20">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020901_30702" type="number" id="ecp_99020901_30702" v-model="ecp_99020901_30702" @input="handleActionClick_Totalizar990209(this); handleActionClick_30702(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30702(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_20">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="99020901_30" type="number" id="ecp_99020901_30" disabled v-model="ecp_99020901_30" @input="handleActionClick_Totalizar990209(this); handleActionClick_30(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30(this)"  />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_20">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="99020901_31" type="number" id="ecp_99020901_31" v-model="ecp_99020901_31" @input="handleActionClick_Totalizar990209(this); handleActionClick_31(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_31(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_31(this)"  />
          </div>
        </td>
        <td scope="col" id="th23_20">
          <VTextField disabled label="99020901_Total" type="number" id="ecp_99020901_Total" v-model="ecp_99020901_Total" @input="handleActionClick_Totalizar990209(this); handleActionClick_Total(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_Total(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_Total(this)"  />
        </td>
      </tr>  -->
      <!-- 99020902 | OTROS CAMBIOS DETALLAR | 19
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400">OTROS CAMBIOS DETALLAR</td>
        <td scope="col" width="100" id="th2_21">99020902</td>
        <td scope="col" class="text-center" width="150" id="th3_21">
          <VTextField label="99020902_301" type="number" id="ecp_99020902_301"  v-model="ecp_99020902_301" @input="handleActionClick_Totalizar990209(this); handleActionClick_301(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_301(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_301(this)"  />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_21">
          <VTextField label="99020902_302" type="number" id="ecp_99020902_302" v-model="ecp_99020902_302" @input="handleActionClick_Totalizar990209(this); handleActionClick_302(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_302(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_302(this)"  />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_21">
          <VTextField label="99020902_303" type="number" id="ecp_99020902_303" v-model="ecp_99020902_303" @input="handleActionClick_Totalizar990209(this); handleActionClick_303(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_303(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_303(this)"  />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_21">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020902_30401" type="number" id="ecp_99020902_30401" v-model="ecp_99020902_30401" @input="handleActionClick_Totalizar990209(this); handleActionClick_30401(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30401(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30401(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_21">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020902_30402" type="number" id="ecp_99020902_30402" v-model="ecp_99020902_30402" @input="handleActionClick_Totalizar990209(this); handleActionClick_30402(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30402(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30402(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_21">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020902_30501" type="number" id="ecp_99020902_30501" v-model="ecp_99020902_30501" @input="handleActionClick_Totalizar990209(this); handleActionClick_30501(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30501(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_21">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020902_30502" type="number" id="ecp_99020902_30502" v-model="ecp_99020902_30502" @input="handleActionClick_Totalizar990209(this); handleActionClick_30502(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30502(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_21">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020902_30503" type="number" id="ecp_99020902_30503" v-model="ecp_99020902_30503" @input="handleActionClick_Totalizar990209(this); handleActionClick_30503(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30503(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_21">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020902_30504" type="number" id="ecp_99020902_30504" v-model="ecp_99020902_30504" @input="handleActionClick_Totalizar990209(this); handleActionClick_30504(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30504(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_21">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField dlabel="99020902_30601" type="number" id="ecp_99020902_30601" v-model="ecp_99020902_30601" @input="handleActionClick_Totalizar990209(this); handleActionClick_30601(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30601(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_21">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020902_30602" type="number" id="ecp_99020902_30602" v-model="ecp_99020902_30602" @input="handleActionClick_Totalizar990209(this); handleActionClick_30602(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30602(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_21">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020902_30603" type="number" id="ecp_99020902_30603" v-model="ecp_99020902_30603" @input="handleActionClick_Totalizar990209(this); handleActionClick_30603(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30603(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_21">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020902_30604" type="number" id="ecp_99020902_30604" v-model="ecp_99020902_30604" @input="handleActionClick_Totalizar990209(this); handleActionClick_30604(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30604(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_21">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020902_30605" type="number" id="ecp_99020902_30605" v-model="ecp_99020902_30605" @input="handleActionClick_Totalizar990209(this); handleActionClick_30605(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30605(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30605(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_21">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020902_30606" type="number" id="ecp_99020902_30606" v-model="ecp_99020902_30606" @input="handleActionClick_Totalizar990209(this); handleActionClick_30606(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30606(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30606(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_21">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020902_30607" type="number" id="ecp_99020902_30607" v-model="ecp_99020902_30607" @input="handleActionClick_Totalizar990209(this); handleActionClick_30607(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30607(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_21">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020902_30701" type="number" id="ecp_99020902_30701" v-model="ecp_99020902_30701" @input="handleActionClick_Totalizar990209(this); handleActionClick_30701(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30701(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_21">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99020902_30702" type="number" id="ecp_99020902_30702" v-model="ecp_99020902_30702" @input="handleActionClick_Totalizar990209(this); handleActionClick_30702(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30702(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_21">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="99020902_30" type="number" id="ecp_99020902_30" disabled  v-model="ecp_99020902_30" @input="handleActionClick_Totalizar990209(this); handleActionClick_30(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_30(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_30(this)"  />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_21">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="99020902_31" type="number" id="ecp_99020902_31" v-model="ecp_99020902_31" @input="handleActionClick_Totalizar990209(this); handleActionClick_31(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_31(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_31(this)"  />
          </div>
        </td>
        <td scope="col" id="th23_21">
          <VTextField disabled label="99020902_Total" type="number" id="ecp_99020902_Total" v-model="ecp_99020902_Total" @input="handleActionClick_Totalizar990209(this); handleActionClick_Total(this)" @blur="handleActionClick_Totalizar990209(this); handleActionClick_Total(this)" @keyup="handleActionClick_Totalizar990209(this); handleActionClick_Total(this)"  />
        </td>
      </tr>  -->
      <!-- 990210 | RESULTADO INTEGRAL TOTAL DEL AÑO<br/> (GANANCIA O PÉRDIDA DEL EJERCICIO) | 20 -->
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400">RESULTADO INTEGRAL TOTAL DEL AÑO<br/> (GANANCIA O PÉRDIDA DEL EJERCICIO)</td>
        <td scope="col" width="100" id="th2_18">990210</td>
        <td scope="col" class="text-center" width="150" id="th3_18">
          <VTextField label="990210_301" type="number" id="ecp_990210_301" disabled v-model="ecp_990210_301" @input="handleActionClick_301(this)" @blur="handleActionClick_301(this)" @keyup="handleActionClick_301(this)"  />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_18">
          <VTextField label="990210_302" type="number" id="ecp_990210_302" disabled v-model="ecp_990210_302" @input="handleActionClick_302(this)" @blur="handleActionClick_302(this)" @keyup="handleActionClick_302(this)"  />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_18">
          <VTextField label="990210_303" type="number" id="ecp_990210_303" disabled v-model="ecp_990210_303" @input="handleActionClick_303(this)" @blur="handleActionClick_303(this)" @keyup="handleActionClick_303(this)"  />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_18">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990210_30401" type="number" id="ecp_990210_30401" disabled v-model="ecp_990210_30401" @input="handleActionClick_30401(this)" @blur="handleActionClick_30401(this)" @keyup="handleActionClick_30401(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_18">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990210_30402" type="number" id="ecp_990210_30402" disabled v-model="ecp_990210_30402" @input="handleActionClick_30402(this)" @blur="handleActionClick_30402(this)" @keyup="handleActionClick_30402(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_18">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990210_30501" type="number" id="ecp_990210_30501" disabled v-model="ecp_990210_30501" @input="handleActionClick_30501(this)" @blur="handleActionClick_30501(this)" @keyup="handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_18">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990210_30502" type="number" id="ecp_990210_30502" disabled v-model="ecp_990210_30502" @input="handleActionClick_30502(this)" @blur="handleActionClick_30502(this)" @keyup="handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_18">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990210_30503" type="number" id="ecp_990210_30503" disabled v-model="ecp_990210_30503" @input="handleActionClick_30503(this)" @blur="handleActionClick_30503(this)" @keyup="handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_18">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990210_30504" type="number" id="ecp_990210_30504" disabled v-model="ecp_990210_30504" @input="handleActionClick_30504(this)" @blur="handleActionClick_30504(this)" @keyup="handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_18">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990210_30601" type="number" id="ecp_990210_30601" disabled v-model="ecp_990210_30601" @input="handleActionClick_30601(this)" @blur="handleActionClick_30601(this)" @keyup="handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_18">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990210_30602" type="number" id="ecp_990210_30602" disabled v-model="ecp_990210_30602" @input="handleActionClick_30602(this)" @blur="handleActionClick_30602(this)" @keyup="handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_18">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990210_30603" type="number" id="ecp_990210_30603" disabled v-model="ecp_990210_30603" @input="handleActionClick_30603(this)" @blur="handleActionClick_30603(this)" @keyup="handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_18">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990210_30604" type="number" id="ecp_990210_30604" disabled v-model="ecp_990210_30604" @input="handleActionClick_30604(this)" @blur="handleActionClick_30604(this)" @keyup="handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_18">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990210_30605" type="number" id="ecp_990210_30605" disabled v-model="ecp_990210_30605" @input="handleActionClick_30605(this)" @blur="handleActionClick_30605(this)" @keyup="handleActionClick_30605(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_18">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990210_30606" type="number" id="ecp_990210_30606" disabled v-model="ecp_990210_30606" @input="handleActionClick_30606(this)" @blur="handleActionClick_30606(this)" @keyup="handleActionClick_30606(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_18">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990210_30607" type="number" id="ecp_990210_30607" disabled v-model="ecp_990210_30607" @input="handleActionClick_30607(this)" @blur="handleActionClick_30607(this)" @keyup="handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_18">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990210_30701" type="number" id="ecp_990210_30701" disabled v-model="ecp_990210_30701" @input="handleActionClick_30701(this)" @blur="handleActionClick_30701(this)" @keyup="handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_18">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="990210_30702" type="number" id="ecp_990210_30702" disabled v-model="ecp_990210_30702" @input="handleActionClick_30702(this);" @blur="handleActionClick_30702(this)" @keyup="handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td id="th21_18">
          <VTextField label="990210_30" type="number" id="ecp_990210_30" disabled v-model="ecp_990210_30" @input="handleActionClick_30(this);" @blur="handleActionClick_30(this)" @keyup="handleActionClick_30(this)"  />
        </td>
        <td id="th22_18">
          <VTextField label="990210_31" type="number" id="ecp_990210_31" disabled v-model="ecp_990210_31" @input="handleActionClick_31(this);" @blur="handleActionClick_31(this)" @keyup="handleActionClick_31(this)"  />
        </td>
        <td scope="col" id="th23_18">
          <VTextField label="990210_Total" type="number" disabled id="ecp_990210_Total" v-model="ecp_990210_Total" @input="handleActionClick_Total(this)" @blur="handleActionClick_Total(this)" @keyup="handleActionClick_Total(this)"  />
        </td>
      </tr>
      <!-- 99 | SALDO AL FINAL DEL PERIODO | 21 -->
      <tr style="height: 3.75rem;" class="sticky-row">
        <td scope="col" width="400" >SALDO AL FINAL DEL PERIODO</td>
        <td scope="col" width="100" id="th2_20">99</td>
        <td scope="col" class="text-center" width="150" id="th3_19">
          <VTextField label="99_301" type="number" id="ecp_99_301" disabled v-model="ecp_99_301" @input="handleActionClick_301(this)" @blur="handleActionClick_301(this)" @keyup="handleActionClick_301(this)"  />
        </td>
        <td scope="col" style="width:300px;text-align:center;" id="th4_19">
          <VTextField label="99_302" type="number" id="ecp_99_302" disabled v-model="ecp_99_302" @input="handleActionClick_302(this)" @blur="handleActionClick_302(this)" @keyup="handleActionClick_302(this)"  />
        </td>
        <td scope="col" class="text-center" style="width:300px;text-align:center;" id="th5_19">
          <VTextField label="99_303" type="number" id="ecp_99_303" disabled v-model="ecp_99_303" @input="handleActionClick_303(this)" @blur="handleActionClick_303(this)" @keyup="handleActionClick_303(this)"  />
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th6_19">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99_30401" type="number" id="ecp_99_30401" disabled v-model="ecp_99_30401" @input="handleActionClick_30401(this)" @blur="handleActionClick_30401(this)" @keyup="handleActionClick_30401(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th7_19">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99_30402" type="number" id="ecp_99_30402" disabled v-model="ecp_99_30402" @input="handleActionClick_30402(this)" @blur="handleActionClick_30402(this)" @keyup="handleActionClick_30402(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th8_19">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99_30501" type="number" id="ecp_99_30501" disabled v-model="ecp_99_30501" @input="handleActionClick_30501(this)" @blur="handleActionClick_30501(this)" @keyup="handleActionClick_30501(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th9_19">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99_30502" type="number" id="ecp_99_30502" disabled v-model="ecp_99_30502" @input="handleActionClick_30502(this)" @blur="handleActionClick_30502(this)" @keyup="handleActionClick_30502(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th10_19">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99_30503" type="number" id="ecp_99_30503" disabled v-model="ecp_99_30503" @input="handleActionClick_30503(this)" @blur="handleActionClick_30503(this)" @keyup="handleActionClick_30503(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th11_19">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99_30504" type="number" id="ecp_99_30504" disabled v-model="ecp_99_30504" @input="handleActionClick_30504(this)" @blur="handleActionClick_30504(this)" @keyup="handleActionClick_30504(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td scope="col" class="text-center" style="text-align:center;">
          <tr>
            <td style="min-width:150px;" id="th12_19">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99_30601" type="number" id="ecp_99_30601" disabled v-model="ecp_99_30601" @input="handleActionClick_30601(this)" @blur="handleActionClick_30601(this)" @keyup="handleActionClick_30601(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th13_19">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99_30602" type="number" id="ecp_99_30602" disabled v-model="ecp_99_30602" @input="handleActionClick_30602(this)" @blur="handleActionClick_30602(this)" @keyup="handleActionClick_30602(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th14_19">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99_30603" type="number" id="ecp_99_30603" disabled v-model="ecp_99_30603" @input="handleActionClick_30603(this)" @blur="handleActionClick_30603(this)" @keyup="handleActionClick_30603(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th15_19">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99_30604" type="number" id="ecp_99_30604" disabled v-model="ecp_99_30604" @input="handleActionClick_30604(this)" @blur="handleActionClick_30604(this)" @keyup="handleActionClick_30604(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th16_19">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99_30605" type="number" id="ecp_99_30605" disabled v-model="ecp_99_30605" @input="handleActionClick_30605(this)" @blur="handleActionClick_30605(this)" @keyup="handleActionClick_30605(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th17_19">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99_30606" type="number" id="ecp_99_30606" disabled v-model="ecp_99_30606" @input="handleActionClick_30606(this)" @blur="handleActionClick_30606(this)" @keyup="handleActionClick_30606(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th18_19">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99_30607" type="number" id="ecp_99_30607" disabled v-model="ecp_99_30607" @input="handleActionClick_30607(this)" @blur="handleActionClick_30607(this)" @keyup="handleActionClick_30607(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th19_19">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99_30701" type="number" id="ecp_99_30701" disabled v-model="ecp_99_30701" @input="handleActionClick_30701(this)" @blur="handleActionClick_30701(this)" @keyup="handleActionClick_30701(this)"  />
              </div>
            </td>
            <td style="min-width:150px;" id="th20_19">
              <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
                <VTextField label="99_30702" type="number" id="ecp_99_30702" disabled v-model="ecp_99_30702" @input="handleActionClick_30702(this)" @blur="handleActionClick_30702(this)" @keyup="handleActionClick_30702(this)"  />
              </div>
            </td>
          </tr>
        </td>
        <td style="min-width:150px;" id="th21_19">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="99_30" type="number" id="ecp_99_30" disabled v-model="ecp_99_30" @input="handleActionClick_30(this)" @blur="handleActionClick_30(this)" @keyup="handleActionClick_30(this)"  />
          </div>
        </td>
        <td style="min-width:150px;" id="th22_19">
          <div scope="col" class="text-center" style="max-width:140px; white-space: initial;align-text:center;">
            <VTextField label="99_31" type="number" id="ecp_99_31" disabled v-model="ecp_99_31" @input="handleActionClick_31(this)" @blur="handleActionClick_31(this)" @keyup="handleActionClick_31(this)"  />
          </div>
        </td>
        <td scope="col" id="th23_19">
          <VTextField label="99_Total" type="number" id="ecp_99_Total" disabled v-model="ecp_99_Total" />
        </td>
      </tr>
      </tbody>
    </VTable>
    <!-- !SECTION -->
  </VCard>
</template>

<style lang="scss">
#invoice-list {
  .invoice-list-actions {
    inline-size: 8rem;
  }

  .invoice-list-filter {
    inline-size: 12rem;
  }

  .sticky-header {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 10;
  }

  .sticky-row {
    position: sticky;
    top: 4.5rem;
    background-color: white;
    z-index: 9;
  }

  .table-body-container {
    max-height: 300px; /* Altura fija de 300px */
    overflow-y: auto;  /* Habilita el scroll vertical */
    width: auto;
  }

}
</style>
