import { defineStore } from 'pinia'
import axios from '@/plugins/axios/axios'

export const useInvoiceStore = defineStore('InvoiceStore', {
  actions: {
    // 👉 Fetch all Invoices
    fetchInvoices(params) {
      return axios.get('apps/invoices', { params })
    },

    // 👉 Fetch single invoice
    fetchInvoice(id) {
      return axios.get(`/apps/invoices/${id}`)
    },

    // 👉 Fetch Clients
    fetchClients() {
      return axios.get('/apps/invoice/clients')
    },
  },
})
