var agentsData = [
  {
    "id": 1,
    "name": "Sam",
    "phone_no": "+1234 567 891",
    "personal_data": {
      "total_incoming_calls": 50,
      "answered_calls": 45,
      "forwarded_calls": 5,
      "churn_rate": 10,
      "escalations": 3
    },
    "calls": [
      {
        "call_id": 1,
        "number": "+1234 567 890",
        "call_in_time": "05:23 am",
        "call_out_time": "05:59 am",
        "solution_status": "resolved",
        "reason_of_call": "Enquiry",
        "customer_satisfaction": "happy"
      },
      {
        "call_id": 2,
        "number": "+1234 567 890",
        "call_in_time": "06:56 am",
        "call_out_time": "07:50 am",
        "solution_status": "unresolved",
        "reason_of_call": "Service Issues",
        "customer_satisfaction": "unhappy"
      },
      {
        "call_id": 3,
        "number": "+1234 567 890",
        "call_in_time": "05:23 am",
        "call_out_time": "05:59 am",
        "solution_status": "resolved",
        "reason_of_call": "Enquiry",
        "customer_satisfaction": "happy"
      },
      {
        "call_id": 4,
        "number": "+1234 567 890",
        "call_in_time": "06:56 am",
        "call_out_time": "07:50 am",
        "solution_status": "unresolved",
        "reason_of_call": "Service Issues",
        "customer_satisfaction": "unhappy"
      }

      // Additional call data here
    ],
    "chats": [
      {
        "chat_id": 1,
        "number": "+1234 567 890",
        "start_time": "10:00 am",
        "end_time": "10:30 am",
        "solution_status": "resolved",
        "reason_of_chat": "Policy Renewal",
        "customer_satisfaction": "neutral"
      }
      // Additional chat data here
    ],
    "ongoingCall": {
      "customerName": "Brown",
      "CustomerNumber": "+1234 567 891",
      "callStatus": "hot"
    }
  },
  {
    "id": 2,
    "name": "Mark",
    "phone_no": "+1234 567 892",
    "personal_data": {
      "total_incoming_calls": 60,
      "answered_calls": 50,
      "forwarded_calls": 10,
      "churn_rate": 8,
      "escalations": 4
    },
    "calls": [
      {
        "call_id": 3,
        "number": "+1234 567 891",
        "call_in_time": "07:10 pm",
        "call_out_time": "07:54 pm",
        "solution_status": "resolved",
        "reason_of_call": "Technical Issues",
        "customer_satisfaction": "happy"
      },
      {
        "call_id": 4,
        "number": "+1234 567 892",
        "call_in_time": "07:48 pm",
        "call_out_time": "08:35 pm",
        "solution_status": "unresolved",
        "reason_of_call": "Policy Renewals",
        "customer_satisfaction": "unhappy"
      }
      // Additional call data here
    ],
    "chats": [
      {
        "chat_id": 2,
        "number": "+1234 567 891",
        "start_time": "11:00 am",
        "end_time": "11:30 am",
        "solution_status": "resolved",
        "reason_of_chat": "Technical Support",
        "customer_satisfaction": "happy"
      }
      // Additional chat data here
    ],
    "ongoingCall": {
      "customerName": "Richard",
      "CustomerNumber": "+1234 567 8900",
      "callStatus": "normal"
    }
  },
  {
    "id": 3,
    "name": "John",
    "phone_no": "+1234 567 893",
    "personal_data": {
      "total_incoming_calls": 40,
      "answered_calls": 35,
      "forwarded_calls": 5,
      "churn_rate": 12,
      "escalations": 2
    },
    "calls": [
      {
        "call_id": 5,
        "number": "+1234 567 893",
        "call_in_time": "09:15 am",
        "call_out_time": "09:45 am",
        "solution_status": "resolved",
        "reason_of_call": "Billing Inquiry",
        "customer_satisfaction": "happy"
      },
      {
        "call_id": 6,
        "number": "+1234 567 892",
        "call_in_time": "10:30 am",
        "call_out_time": "11:15 am",
        "solution_status": "unresolved",
        "reason_of_call": "Technical Support",
        "customer_satisfaction": "unhappy"
      }
      // Additional call data here
    ],
    "chats": [
      {
        "chat_id": 3,
        "number": "+1234 567 893",
        "start_time": "01:00 pm",
        "end_time": "01:45 pm",
        "solution_status": "resolved",
        "reason_of_chat": "Account Update",
        "customer_satisfaction": "happy"
      }
      // Additional chat data here
    ],
    "ongoingCall": {
      "customerName": "David",
      "CustomerNumber": "+1234 567 891",
      "callStatus": "good"
    }
  },
  {
    "id": 4,
    "name": "Sam",
    "phone_no": "+1234 567 894",
    "churn_rate": "5%",
    "escalations_count": "25",
    "personal_data": {
      "total_incoming_calls": 55,
      "answered_calls": 48,
      "forwarded_calls": 7,
      "churn_rate": 9,
      "escalations": 5
    },
    "calls": [
      {
        "call_id": 6,
        "number": "+1234 567 894",
        "call_in_time": "03:20 pm",
        "call_out_time": "04:00 pm",
        "call_date": "01/01/2024",
        "solution_status": "resolved",
        "reason_of_call": "service issues",
        "customer_satisfaction": "happy",
        "currentStatus": "open"
      },
      {
        "call_id": 7,
        "number": "+1234 567 894",
        "call_in_time": "03:20 pm",
        "call_out_time": "04:00 pm",
        "call_date": "01/01/2024",
        "solution_status": "resolved",
        "reason_of_call": "service issues",
        "customer_satisfaction": "happy",
        "currentStatus": "open"
      },
      {
        "call_id": 8,
        "number": "+1234 567 891",
        "call_in_time": "05:30 pm",
        "call_out_time": "06:15 pm",
        "call_date": "02/02/2024",
        "solution_status": "unresolved",
        "reason_of_call": "technical issues",
        "customer_satisfaction": "unhappy",
        "currentStatus": "closed"
      },
      {
        "call_id": 9,
        "number": "+1234 567 891",
        "call_in_time": "05:30 pm",
        "call_out_time": "06:15 pm",
        "call_date": "03/03/2024",
        "solution_status": "unresolved",
        "reason_of_call": "violations",
        "customer_satisfaction": "unhappy",
        "currentStatus": "forwarded"
      },
      {
        "call_id": 10,
        "number": "+1234 567 891",
        "call_in_time": "05:30 pm",
        "call_out_time": "06:15 pm",
        "call_date": "04/04/2024",
        "solution_status": "unresolved",
        "reason_of_call": "policy renewals",
        "customer_satisfaction": "neutral",
        "currentStatus": "forwarded"
      },
      {
        "call_id": 11,
        "number": "+1234 567 891",
        "call_in_time": "05:30 pm",
        "call_out_time": "06:15 pm",
        "call_date": "05/05/2024",
        "solution_status": "unresolved",
        "reason_of_call": "enquiry",
        "customer_satisfaction": "neutral",
        "currentStatus": "forwarded"
      },
      {
        "call_id": 12,
        "number": "+1234 567 892",
        "call_in_time": "02:15 pm",
        "call_out_time": "02:45 pm",
        "call_date": "06/06/2024",
        "solution_status": "resolved",
        "reason_of_call": "billing issues",
        "customer_satisfaction": "happy",
        "currentStatus": "closed"
      },
      {
        "call_id": 13,
        "number": "+1234 567 893",
        "call_in_time": "11:00 am",
        "call_out_time": "11:30 am",
        "call_date": "07/07/2024",
        "solution_status": "resolved",
        "reason_of_call": "account setup",
        "customer_satisfaction": "happy",
        "currentStatus": "open"
      },
      {
        "call_id": 14,
        "number": "+1234 567 894",
        "call_in_time": "01:00 pm",
        "call_out_time": "01:30 pm",
        "call_date": "08/08/2024",
        "solution_status": "unresolved",
        "reason_of_call": "technical issues",
        "customer_satisfaction": "neutral",
        "currentStatus": "forwarded"
      }
    ],
    "chats": [
      {
        "chat_id": 4,
        "number": "+1234 567 894",
        "start_time": "07:00 pm",
        "end_time": "07:30 pm",
        "solution_status": "resolved",
        "reason_of_chat": "Technical Assistance",
        "customer_satisfaction": "happy"
      },
      {
        "chat_id": 5,
        "number": "+1234 567 892",
        "start_time": "08:00 pm",
        "end_time": "08:20 pm",
        "solution_status": "resolved",
        "reason_of_chat": "billing issues",
        "customer_satisfaction": "happy"
      },
      {
        "chat_id": 6,
        "number": "+1234 567 893",
        "start_time": "09:00 pm",
        "end_time": "09:25 pm",
        "solution_status": "unresolved",
        "reason_of_chat": "technical issues",
        "customer_satisfaction": "neutral"
      },
      {
        "chat_id": 7,
        "number": "+1234 567 894",
        "start_time": "10:00 pm",
        "end_time": "10:15 pm",
        "solution_status": "resolved",
        "reason_of_chat": "service issues",
        "customer_satisfaction": "happy"
      }
    ],
    "tickets": [
      {
        "ticket_id": 1,
        "number": "+1234 567 894",
        "start_time": "07:00 pm",
        "end_time": "07:30 pm",
        "solution_status": "resolved",
        "reason_of_chat": "Technical Assistance",
        "customer_satisfaction": "unhappy"
      },
      {
        "ticket_id": 2,
        "number": "+1234 567 894",
        "start_time": "07:00 pm",
        "end_time": "07:30 pm",
        "solution_status": "resolved",
        "reason_of_chat": "Technical Assistance",
        "customer_satisfaction": "unhappy"
      }
    ],
    "ongoingCall": {
      "customerName": "Mark",
      "CustomerNumber": "+1234 567 891",
      "callStatus": "normal"
    }
  },
  {
    "id": 5,
    "name": "David",
    "phone_no": "+1234 567 895",
    "personal_data": {
      "total_incoming_calls": 45,
      "answered_calls": 42,
      "forwarded_calls": 3,
      "churn_rate": 11,
      "escalations": 3
    },
    "calls": [
      {
        "call_id": 9,
        "number": "+1234 567 892",
        "call_in_time": "08:45 am",
        "call_out_time": "09:30 am",
        "solution_status": "resolved",
        "reason_of_call": "Technical Support",
        "customer_satisfaction": "happy"
      },
      {
        "call_id": 10,
        "number": "+1234 567 895",
        "call_in_time": "10:15 am",
        "call_out_time": "10:50 am",
        "solution_status": "unresolved",
        "reason_of_call": "Account Issues",
        "customer_satisfaction": "unhappy"
      }
      // Additional call data here
    ],
    "chats": [
      {
        "chat_id": 5,
        "number": "+1234 567 895",
        "start_time": "12:00 pm",
        "end_time": "12:30 pm",
        "solution_status": "resolved",
        "reason_of_chat": "Service Inquiry",
        "customer_satisfaction": "happy"
      }
      // Additional chat data here
    ],
    "ongoingCall": {
      "customerName": "Kumar",
      "CustomerNumber": "+1234 567 8900",
      "callStatus": "hot"
    }
  },
  {
    "id": 6,
    "name": "Agent 6",
    "phone_no": "+1234 567 896",
    "personal_data": {
      "total_incoming_calls": 55,
      "answered_calls": 48,
      "forwarded_calls": 7,
      "churn_rate": 9,
      "escalations": 5
    },
    "calls": [
      {
        "call_id": 11,
        "number": "+1234 567 891",
        "call_in_time": "02:30 pm",
        "call_out_time": "03:15 pm",
        "solution_status": "resolved",
        "reason_of_call": "Policy Renewal",
        "customer_satisfaction": "happy"
      },
      {
        "call_id": 12,
        "number": "+1234 567 896",
        "call_in_time": "04:00 pm",
        "call_out_time": "04:45 pm",
        "solution_status": "unresolved",
        "reason_of_call": "Billing Issue",
        "customer_satisfaction": "neutral"
      }
      // Additional call data here
    ],
    "chats": [
      {
        "chat_id": 6,
        "number": "+1234 567 891",
        "start_time": "05:00 pm",
        "end_time": "05:30 pm",
        "solution_status": "resolved",
        "reason_of_chat": "Technical Support",
        "customer_satisfaction": "happy"
      }
      // Additional chat data here
    ],
    "ongoingCall": {
      "customerName": "Brown",
      "CustomerNumber": "+1234 567 891",
      "callStatus": "good"
    }
  },
  {
    "id": 7,
    "name": "Agent 7",
    "phone_no": "+1234 567 897",
    "personal_data": {
      "total_incoming_calls": 48,
      "answered_calls": 44,
      "forwarded_calls": 4,
      "churn_rate": 9,
      "escalations": 2
    },
    "calls": [
      {
        "call_id": 13,
        "number": "+1234 567 897",
        "call_in_time": "09:00 am",
        "call_out_time": "09:45 am",
        "solution_status": "resolved",
        "reason_of_call": "Service Inquiry",
        "customer_satisfaction": "happy"
      },
      {
        "call_id": 14,
        "number": "+1234 567 895",
        "call_in_time": "10:30 am",
        "call_out_time": "11:15 am",
        "solution_status": "unresolved",
        "reason_of_call": "Technical Support",
        "customer_satisfaction": "unhappy"
      }
      // Additional call data here
    ],
    "chats": [
      {
        "chat_id": 7,
        "number": "+1234 567 897",
        "start_time": "12:00 pm",
        "end_time": "12:30 pm",
        "solution_status": "resolved",
        "reason_of_chat": "Account Update",
        "customer_satisfaction": "happy"
      }
      // Additional chat data here
    ],
    "ongoingCall": null
  },
  {
    "id": 8,
    "name": "Agent 8",
    "phone_no": "+1234 567 898",
    "personal_data": {
      "total_incoming_calls": 55,
      "answered_calls": 50,
      "forwarded_calls": 5,
      "churn_rate": 7,
      "escalations": 3
    },
    "calls": [
      {
        "call_id": 15,
        "number": "+1234 567 896",
        "call_in_time": "02:00 pm",
        "call_out_time": "02:45 pm",
        "solution_status": "resolved",
        "reason_of_call": "Billing Inquiry",
        "customer_satisfaction": "happy"
      },
      {
        "call_id": 16,
        "number": "+1234 567 897",
        "call_in_time": "03:30 pm",
        "call_out_time": "04:15 pm",
        "solution_status": "unresolved",
        "reason_of_call": "Policy Renewal",
        "customer_satisfaction": "neutral"
      }
      // Additional call data here
    ],
    "chats": [
      {
        "chat_id": 8,
        "number": "+1234 567 896",
        "start_time": "05:00 pm",
        "end_time": "05:30 pm",
        "solution_status": "resolved",
        "reason_of_chat": "Technical Support",
        "customer_satisfaction": "happy"
      }
      // Additional chat data here
    ],
    "ongoingCall": {
      "customerName": "Mark",
      "CustomerNumber": "+1234 567 8900",
      "callStatus": "good"
    }
  },
  {
    "id": 9,
    "name": "Agent 9",
    "phone_no": "+1234 567 899",
    "personal_data": {
      "total_incoming_calls": 60,
      "answered_calls": 55,
      "forwarded_calls": 5,
      "churn_rate": 6,
      "escalations": 4
    },
    "calls": [
      {
        "call_id": 17,
        "number": "+1234 567 898",
        "call_in_time": "11:00 am",
        "call_out_time": "11:45 am",
        "solution_status": "resolved",
        "reason_of_call": "Technical Issues",
        "customer_satisfaction": "happy"
      },
      {
        "call_id": 18,
        "number": "+1234 567 899",
        "call_in_time": "01:30 pm",
        "call_out_time": "02:15 pm",
        "solution_status": "unresolved",
        "reason_of_call": "Service Complaint",
        "customer_satisfaction": "unhappy"
      }
      // Additional call data here
    ],
    "chats": [
      {
        "chat_id": 9,
        "number": "+1234 567 898",
        "start_time": "03:00 pm",
        "end_time": "03:30 pm",
        "solution_status": "resolved",
        "reason_of_chat": "Policy Renewal",
        "customer_satisfaction": "happy"
      }
      // Additional chat data here
    ],
    "ongoingCall": {
      "customerName": "Richard",
      "CustomerNumber": "+1234 567 891",
      "callStatus": "normal"
    }
  },
  {
    "id": 10,
    "name": "Agent 10",
    "phone_no": "+1234 567 8900",
    "personal_data": {
      "total_incoming_calls": 50,
      "answered_calls": 46,
      "forwarded_calls": 4,
      "churn_rate": 8,
      "escalations": 2
    },
    "calls": [
      {
        "call_id": 19,
        "number": "+1234 567 899",
        "call_in_time": "04:00 pm",
        "call_out_time": "04:45 pm",
        "solution_status": "resolved",
        "reason_of_call": "Account Issues",
        "customer_satisfaction": "happy"
      },
      {
        "call_id": 20,
        "number": "+1234 567 8900",
        "call_in_time": "05:30 pm",
        "call_out_time": "06:15 pm",
        "solution_status": "unresolved",
        "reason_of_call": "Billing Inquiry",
        "customer_satisfaction": "neutral"
      }
      // Additional call data here
    ],
    "chats": [
      {
        "chat_id": 10,
        "number": "+1234 567 899",
        "start_time": "07:00 pm",
        "end_time": "07:30 pm",
        "solution_status": "resolved",
        "reason_of_chat": "Technical Support",
        "customer_satisfaction": "happy"
      }
      // Additional chat data here
    ],
    "ongoingCall": {
      "customerName": "Mark",
      "CustomerNumber": "+1234 567 891",
      "callStatus": "good"
    }
  }
]
