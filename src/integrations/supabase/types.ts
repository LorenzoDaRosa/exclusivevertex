export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      admin_clients: {
        Row: {
          company: string
          contact: string
          created_at: string
          email: string
          id: string
          name: string
          notes: string
          source_lead_id: string | null
          whatsapp: string
        }
        Insert: {
          company?: string
          contact?: string
          created_at?: string
          email?: string
          id?: string
          name: string
          notes?: string
          source_lead_id?: string | null
          whatsapp?: string
        }
        Update: {
          company?: string
          contact?: string
          created_at?: string
          email?: string
          id?: string
          name?: string
          notes?: string
          source_lead_id?: string | null
          whatsapp?: string
        }
        Relationships: [
          {
            foreignKeyName: "admin_clients_source_lead_id_fkey"
            columns: ["source_lead_id"]
            isOneToOne: true
            referencedRelation: "admin_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_finance: {
        Row: {
          amount: number
          category: string
          client_id: string | null
          created_at: string
          due_date: string
          group_id: string
          id: string
          installment: number
          installments: number
          kind: string
          notes: string
          paid_date: string | null
          project_id: string | null
          status: string
          title: string
        }
        Insert: {
          amount: number
          category: string
          client_id?: string | null
          created_at?: string
          due_date: string
          group_id?: string
          id?: string
          installment?: number
          installments?: number
          kind: string
          notes?: string
          paid_date?: string | null
          project_id?: string | null
          status?: string
          title: string
        }
        Update: {
          amount?: number
          category?: string
          client_id?: string | null
          created_at?: string
          due_date?: string
          group_id?: string
          id?: string
          installment?: number
          installments?: number
          kind?: string
          notes?: string
          paid_date?: string | null
          project_id?: string | null
          status?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "admin_finance_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "admin_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "admin_finance_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "admin_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_leads: {
        Row: {
          company: string
          created_at: string
          email: string
          id: string
          name: string
          next_contact: string | null
          notes: string
          source: string
          stage: string
          whatsapp: string
        }
        Insert: {
          company?: string
          created_at?: string
          email?: string
          id?: string
          name: string
          next_contact?: string | null
          notes?: string
          source?: string
          stage?: string
          whatsapp?: string
        }
        Update: {
          company?: string
          created_at?: string
          email?: string
          id?: string
          name?: string
          next_contact?: string | null
          notes?: string
          source?: string
          stage?: string
          whatsapp?: string
        }
        Relationships: []
      }
      admin_projects: {
        Row: {
          amount: number
          briefing: string
          client_id: string
          created_at: string
          due_date: string | null
          id: string
          progress: number
          service: string
          start_date: string | null
          status: string
          title: string
          url: string
        }
        Insert: {
          amount?: number
          briefing?: string
          client_id: string
          created_at?: string
          due_date?: string | null
          id?: string
          progress?: number
          service?: string
          start_date?: string | null
          status?: string
          title: string
          url?: string
        }
        Update: {
          amount?: number
          briefing?: string
          client_id?: string
          created_at?: string
          due_date?: string | null
          id?: string
          progress?: number
          service?: string
          start_date?: string | null
          status?: string
          title?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "admin_projects_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "admin_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_settings: {
        Row: {
          agency_name: string
          contact_email: string
          id: string
          singleton: boolean
          whatsapp: string
        }
        Insert: {
          agency_name: string
          contact_email?: string
          id?: string
          singleton?: boolean
          whatsapp?: string
        }
        Update: {
          agency_name?: string
          contact_email?: string
          id?: string
          singleton?: boolean
          whatsapp?: string
        }
        Relationships: []
      }
      admin_tasks: {
        Row: {
          created_at: string
          due_date: string | null
          id: string
          notes: string
          priority: string
          project_id: string | null
          status: string
          title: string
        }
        Insert: {
          created_at?: string
          due_date?: string | null
          id?: string
          notes?: string
          priority?: string
          project_id?: string | null
          status?: string
          title: string
        }
        Update: {
          created_at?: string
          due_date?: string | null
          id?: string
          notes?: string
          priority?: string
          project_id?: string | null
          status?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "admin_tasks_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "admin_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          id: string
          name: string
          preferences: Json
        }
        Insert: {
          id: string
          name?: string
          preferences?: Json
        }
        Update: {
          id?: string
          name?: string
          preferences?: Json
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      convert_vertex_lead: { Args: { lead_id: string }; Returns: string }
      create_vertex_installments: {
        Args: { payload: Json; quantity: number }
        Returns: undefined
      }
      is_vertex_admin: { Args: never; Returns: boolean }
    }
    Enums: {
      app_role: "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin"],
    },
  },
} as const
