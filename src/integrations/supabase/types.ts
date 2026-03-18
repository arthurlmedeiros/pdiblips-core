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
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      agenda_profiles: {
        Row: {
          ativo: boolean
          created_at: string
          email: string
          id: string
          nome: string
        }
        Insert: {
          ativo?: boolean
          created_at?: string
          email: string
          id: string
          nome: string
        }
        Update: {
          ativo?: boolean
          created_at?: string
          email?: string
          id?: string
          nome?: string
        }
        Relationships: []
      }
      agenda_reservas: {
        Row: {
          created_at: string
          data_fim: string
          data_inicio: string
          descricao: string | null
          id: string
          sala_id: string
          status: string
          titulo: string
          user_id: string
        }
        Insert: {
          created_at?: string
          data_fim: string
          data_inicio: string
          descricao?: string | null
          id?: string
          sala_id: string
          status?: string
          titulo: string
          user_id: string
        }
        Update: {
          created_at?: string
          data_fim?: string
          data_inicio?: string
          descricao?: string | null
          id?: string
          sala_id?: string
          status?: string
          titulo?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "agenda_reservas_sala_id_fkey"
            columns: ["sala_id"]
            isOneToOne: false
            referencedRelation: "agenda_salas"
            referencedColumns: ["id"]
          },
        ]
      }
      agenda_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["agenda_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["agenda_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["agenda_role"]
          user_id?: string
        }
        Relationships: []
      }
      agenda_salas: {
        Row: {
          ativo: boolean
          cor: string
          created_at: string
          id: string
          nome: string
          tem_tv: boolean
        }
        Insert: {
          ativo?: boolean
          cor?: string
          created_at?: string
          id?: string
          nome: string
          tem_tv?: boolean
        }
        Update: {
          ativo?: boolean
          cor?: string
          created_at?: string
          id?: string
          nome?: string
          tem_tv?: boolean
        }
        Relationships: []
      }
      atividades: {
        Row: {
          cliente_id: string | null
          concluida: boolean
          created_at: string
          data_fim: string
          data_inicio: string
          descricao: string | null
          id: string
          oportunidade_id: string | null
          tipo: string
          titulo: string
          vendedor_id: string
        }
        Insert: {
          cliente_id?: string | null
          concluida?: boolean
          created_at?: string
          data_fim: string
          data_inicio: string
          descricao?: string | null
          id?: string
          oportunidade_id?: string | null
          tipo?: string
          titulo: string
          vendedor_id: string
        }
        Update: {
          cliente_id?: string | null
          concluida?: boolean
          created_at?: string
          data_fim?: string
          data_inicio?: string
          descricao?: string | null
          id?: string
          oportunidade_id?: string | null
          tipo?: string
          titulo?: string
          vendedor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "atividades_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "atividades_oportunidade_id_fkey"
            columns: ["oportunidade_id"]
            isOneToOne: false
            referencedRelation: "oportunidades"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "atividades_vendedor_id_fkey"
            columns: ["vendedor_id"]
            isOneToOne: false
            referencedRelation: "vendedores"
            referencedColumns: ["id"]
          },
        ]
      }
      campanhas: {
        Row: {
          ativa: boolean
          created_at: string
          data_fim: string
          data_inicio: string
          descricao: string | null
          id: string
          imagem_url: string | null
          titulo: string
        }
        Insert: {
          ativa?: boolean
          created_at?: string
          data_fim: string
          data_inicio: string
          descricao?: string | null
          id?: string
          imagem_url?: string | null
          titulo: string
        }
        Update: {
          ativa?: boolean
          created_at?: string
          data_fim?: string
          data_inicio?: string
          descricao?: string | null
          id?: string
          imagem_url?: string | null
          titulo?: string
        }
        Relationships: []
      }
      cidades: {
        Row: {
          created_at: string
          estado: string
          id: string
          nome: string
        }
        Insert: {
          created_at?: string
          estado?: string
          id?: string
          nome: string
        }
        Update: {
          created_at?: string
          estado?: string
          id?: string
          nome?: string
        }
        Relationships: []
      }
      clientes: {
        Row: {
          ativo: boolean
          cidade_id: string | null
          cnpj: string | null
          contato_nome: string | null
          created_at: string
          email: string | null
          endereco: string | null
          id: string
          latitude: number | null
          longitude: number | null
          nome_fantasia: string | null
          razao_social: string
          telefone: string | null
          updated_at: string
          vendedor_id: string | null
        }
        Insert: {
          ativo?: boolean
          cidade_id?: string | null
          cnpj?: string | null
          contato_nome?: string | null
          created_at?: string
          email?: string | null
          endereco?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          nome_fantasia?: string | null
          razao_social: string
          telefone?: string | null
          updated_at?: string
          vendedor_id?: string | null
        }
        Update: {
          ativo?: boolean
          cidade_id?: string | null
          cnpj?: string | null
          contato_nome?: string | null
          created_at?: string
          email?: string | null
          endereco?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          nome_fantasia?: string | null
          razao_social?: string
          telefone?: string | null
          updated_at?: string
          vendedor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clientes_cidade_id_fkey"
            columns: ["cidade_id"]
            isOneToOne: false
            referencedRelation: "cidades"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clientes_vendedor_id_fkey"
            columns: ["vendedor_id"]
            isOneToOne: false
            referencedRelation: "vendedores"
            referencedColumns: ["id"]
          },
        ]
      }
      faturamento: {
        Row: {
          created_at: string
          data: string
          descricao: string | null
          id: string
          oportunidade_id: string | null
          tipo: string
          valor: number
          vendedor_id: string
        }
        Insert: {
          created_at?: string
          data: string
          descricao?: string | null
          id?: string
          oportunidade_id?: string | null
          tipo?: string
          valor: number
          vendedor_id: string
        }
        Update: {
          created_at?: string
          data?: string
          descricao?: string | null
          id?: string
          oportunidade_id?: string | null
          tipo?: string
          valor?: number
          vendedor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "faturamento_oportunidade_id_fkey"
            columns: ["oportunidade_id"]
            isOneToOne: false
            referencedRelation: "oportunidades"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "faturamento_vendedor_id_fkey"
            columns: ["vendedor_id"]
            isOneToOne: false
            referencedRelation: "vendedores"
            referencedColumns: ["id"]
          },
        ]
      }
      followups: {
        Row: {
          concluido: boolean
          created_at: string
          data_agendada: string | null
          descricao: string | null
          id: string
          oportunidade_id: string
          tipo: string
        }
        Insert: {
          concluido?: boolean
          created_at?: string
          data_agendada?: string | null
          descricao?: string | null
          id?: string
          oportunidade_id: string
          tipo: string
        }
        Update: {
          concluido?: boolean
          created_at?: string
          data_agendada?: string | null
          descricao?: string | null
          id?: string
          oportunidade_id?: string
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "followups_oportunidade_id_fkey"
            columns: ["oportunidade_id"]
            isOneToOne: false
            referencedRelation: "oportunidades"
            referencedColumns: ["id"]
          },
        ]
      }
      kanban_colunas: {
        Row: {
          cor: string | null
          created_at: string
          id: string
          kanban_id: string
          nome: string
          ordem: number
        }
        Insert: {
          cor?: string | null
          created_at?: string
          id?: string
          kanban_id: string
          nome: string
          ordem?: number
        }
        Update: {
          cor?: string | null
          created_at?: string
          id?: string
          kanban_id?: string
          nome?: string
          ordem?: number
        }
        Relationships: [
          {
            foreignKeyName: "kanban_colunas_kanban_id_fkey"
            columns: ["kanban_id"]
            isOneToOne: false
            referencedRelation: "kanbans"
            referencedColumns: ["id"]
          },
        ]
      }
      kanbans: {
        Row: {
          created_at: string
          descricao: string | null
          id: string
          is_template: boolean
          nome: string
        }
        Insert: {
          created_at?: string
          descricao?: string | null
          id?: string
          is_template?: boolean
          nome: string
        }
        Update: {
          created_at?: string
          descricao?: string | null
          id?: string
          is_template?: boolean
          nome?: string
        }
        Relationships: []
      }
      oportunidades: {
        Row: {
          cliente_id: string
          created_at: string
          data_fechamento: string | null
          id: string
          kanban_coluna_id: string
          kanban_id: string
          observacoes: string | null
          pago: boolean
          produto_id: string
          status: string
          updated_at: string
          valor_negociado: number | null
          vendedor_id: string
        }
        Insert: {
          cliente_id: string
          created_at?: string
          data_fechamento?: string | null
          id?: string
          kanban_coluna_id: string
          kanban_id: string
          observacoes?: string | null
          pago?: boolean
          produto_id: string
          status?: string
          updated_at?: string
          valor_negociado?: number | null
          vendedor_id: string
        }
        Update: {
          cliente_id?: string
          created_at?: string
          data_fechamento?: string | null
          id?: string
          kanban_coluna_id?: string
          kanban_id?: string
          observacoes?: string | null
          pago?: boolean
          produto_id?: string
          status?: string
          updated_at?: string
          valor_negociado?: number | null
          vendedor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "oportunidades_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "oportunidades_kanban_coluna_id_fkey"
            columns: ["kanban_coluna_id"]
            isOneToOne: false
            referencedRelation: "kanban_colunas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "oportunidades_kanban_id_fkey"
            columns: ["kanban_id"]
            isOneToOne: false
            referencedRelation: "kanbans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "oportunidades_produto_id_fkey"
            columns: ["produto_id"]
            isOneToOne: false
            referencedRelation: "produtos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "oportunidades_vendedor_id_fkey"
            columns: ["vendedor_id"]
            isOneToOne: false
            referencedRelation: "vendedores"
            referencedColumns: ["id"]
          },
        ]
      }
      pdi_beneficios: {
        Row: {
          ativo: boolean
          categoria: string | null
          created_at: string
          descricao: string | null
          id: string
          nome: string
        }
        Insert: {
          ativo?: boolean
          categoria?: string | null
          created_at?: string
          descricao?: string | null
          id?: string
          nome: string
        }
        Update: {
          ativo?: boolean
          categoria?: string | null
          created_at?: string
          descricao?: string | null
          id?: string
          nome?: string
        }
        Relationships: []
      }
      pdi_chat_mensagens: {
        Row: {
          conteudo: string
          contexto: Json | null
          created_at: string
          id: string
          role: string
          user_id: string
        }
        Insert: {
          conteudo: string
          contexto?: Json | null
          created_at?: string
          id?: string
          role?: string
          user_id: string
        }
        Update: {
          conteudo?: string
          contexto?: Json | null
          created_at?: string
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      pdi_colaborador_beneficios: {
        Row: {
          beneficio_id: string
          colaborador_id: string
          created_at: string
          id: string
        }
        Insert: {
          beneficio_id: string
          colaborador_id: string
          created_at?: string
          id?: string
        }
        Update: {
          beneficio_id?: string
          colaborador_id?: string
          created_at?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pdi_colaborador_beneficios_beneficio_id_fkey"
            columns: ["beneficio_id"]
            isOneToOne: false
            referencedRelation: "pdi_beneficios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pdi_colaborador_beneficios_colaborador_id_fkey"
            columns: ["colaborador_id"]
            isOneToOne: false
            referencedRelation: "pdi_colaboradores"
            referencedColumns: ["id"]
          },
        ]
      }
      pdi_colaboradores: {
        Row: {
          ativo: boolean
          cargo: string | null
          created_at: string
          funcao: string | null
          gestor_id: string | null
          id: string
          missao: string | null
          nome: string
          posicao_x: number | null
          posicao_y: number | null
          salario: number | null
          setor_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          ativo?: boolean
          cargo?: string | null
          created_at?: string
          funcao?: string | null
          gestor_id?: string | null
          id?: string
          missao?: string | null
          nome: string
          posicao_x?: number | null
          posicao_y?: number | null
          salario?: number | null
          setor_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          ativo?: boolean
          cargo?: string | null
          created_at?: string
          funcao?: string | null
          gestor_id?: string | null
          id?: string
          missao?: string | null
          nome?: string
          posicao_x?: number | null
          posicao_y?: number | null
          salario?: number | null
          setor_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pdi_colaboradores_gestor_id_fkey"
            columns: ["gestor_id"]
            isOneToOne: false
            referencedRelation: "pdi_colaboradores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pdi_colaboradores_setor_id_fkey"
            columns: ["setor_id"]
            isOneToOne: false
            referencedRelation: "pdi_setores"
            referencedColumns: ["id"]
          },
        ]
      }
      pdi_competencias: {
        Row: {
          categoria: string | null
          created_at: string
          descricao: string | null
          id: string
          nome: string
        }
        Insert: {
          categoria?: string | null
          created_at?: string
          descricao?: string | null
          id?: string
          nome: string
        }
        Update: {
          categoria?: string | null
          created_at?: string
          descricao?: string | null
          id?: string
          nome?: string
        }
        Relationships: []
      }
      pdi_configuracoes: {
        Row: {
          chave: string
          created_at: string
          id: string
          updated_at: string
          valor: Json | null
        }
        Insert: {
          chave: string
          created_at?: string
          id?: string
          updated_at?: string
          valor?: Json | null
        }
        Update: {
          chave?: string
          created_at?: string
          id?: string
          updated_at?: string
          valor?: Json | null
        }
        Relationships: []
      }
      pdi_itens: {
        Row: {
          competencia_id: string | null
          concluido: boolean
          created_at: string
          data_limite: string | null
          foco: string | null
          id: string
          instituicao: string | null
          justificativa: string | null
          plano_id: string
          trilha: Database["public"]["Enums"]["pdi_trilha"] | null
          updated_at: string
          valor: number | null
        }
        Insert: {
          competencia_id?: string | null
          concluido?: boolean
          created_at?: string
          data_limite?: string | null
          foco?: string | null
          id?: string
          instituicao?: string | null
          justificativa?: string | null
          plano_id: string
          trilha?: Database["public"]["Enums"]["pdi_trilha"] | null
          updated_at?: string
          valor?: number | null
        }
        Update: {
          competencia_id?: string | null
          concluido?: boolean
          created_at?: string
          data_limite?: string | null
          foco?: string | null
          id?: string
          instituicao?: string | null
          justificativa?: string | null
          plano_id?: string
          trilha?: Database["public"]["Enums"]["pdi_trilha"] | null
          updated_at?: string
          valor?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pdi_itens_competencia_id_fkey"
            columns: ["competencia_id"]
            isOneToOne: false
            referencedRelation: "pdi_competencias"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pdi_itens_plano_id_fkey"
            columns: ["plano_id"]
            isOneToOne: false
            referencedRelation: "pdi_planos"
            referencedColumns: ["id"]
          },
        ]
      }
      pdi_marcos: {
        Row: {
          concluido: boolean
          created_at: string
          id: string
          item_id: string
          ordem: number
          titulo: string
        }
        Insert: {
          concluido?: boolean
          created_at?: string
          id?: string
          item_id: string
          ordem?: number
          titulo: string
        }
        Update: {
          concluido?: boolean
          created_at?: string
          id?: string
          item_id?: string
          ordem?: number
          titulo?: string
        }
        Relationships: [
          {
            foreignKeyName: "pdi_marcos_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "pdi_itens"
            referencedColumns: ["id"]
          },
        ]
      }
      pdi_notificacoes: {
        Row: {
          created_at: string
          id: string
          lida: boolean
          mensagem: string
          referencia_id: string | null
          tipo: string
          titulo: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          lida?: boolean
          mensagem: string
          referencia_id?: string | null
          tipo?: string
          titulo: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          lida?: boolean
          mensagem?: string
          referencia_id?: string | null
          tipo?: string
          titulo?: string
          user_id?: string
        }
        Relationships: []
      }
      pdi_pesquisas_salariais: {
        Row: {
          arquivo_url: string | null
          created_at: string
          dados_extraidos: Json | null
          id: string
          titulo: string
        }
        Insert: {
          arquivo_url?: string | null
          created_at?: string
          dados_extraidos?: Json | null
          id?: string
          titulo: string
        }
        Update: {
          arquivo_url?: string | null
          created_at?: string
          dados_extraidos?: Json | null
          id?: string
          titulo?: string
        }
        Relationships: []
      }
      pdi_planos: {
        Row: {
          ano: number
          colaborador_id: string
          created_at: string
          data_limite: string | null
          id: string
          progresso: number
          semestre: number
          status: Database["public"]["Enums"]["pdi_plano_status"]
          updated_at: string
        }
        Insert: {
          ano: number
          colaborador_id: string
          created_at?: string
          data_limite?: string | null
          id?: string
          progresso?: number
          semestre: number
          status?: Database["public"]["Enums"]["pdi_plano_status"]
          updated_at?: string
        }
        Update: {
          ano?: number
          colaborador_id?: string
          created_at?: string
          data_limite?: string | null
          id?: string
          progresso?: number
          semestre?: number
          status?: Database["public"]["Enums"]["pdi_plano_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pdi_planos_colaborador_id_fkey"
            columns: ["colaborador_id"]
            isOneToOne: false
            referencedRelation: "pdi_colaboradores"
            referencedColumns: ["id"]
          },
        ]
      }
      pdi_profiles: {
        Row: {
          ativo: boolean
          avatar_url: string | null
          cargo: string | null
          created_at: string
          email: string
          id: string
          nome: string
          setor: string | null
          updated_at: string
        }
        Insert: {
          ativo?: boolean
          avatar_url?: string | null
          cargo?: string | null
          created_at?: string
          email: string
          id: string
          nome: string
          setor?: string | null
          updated_at?: string
        }
        Update: {
          ativo?: boolean
          avatar_url?: string | null
          cargo?: string | null
          created_at?: string
          email?: string
          id?: string
          nome?: string
          setor?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      pdi_resultados_testes: {
        Row: {
          colaborador_id: string
          created_at: string
          dados: Json | null
          data: string
          id: string
          pontuacao: number | null
          teste_id: string
        }
        Insert: {
          colaborador_id: string
          created_at?: string
          dados?: Json | null
          data?: string
          id?: string
          pontuacao?: number | null
          teste_id: string
        }
        Update: {
          colaborador_id?: string
          created_at?: string
          dados?: Json | null
          data?: string
          id?: string
          pontuacao?: number | null
          teste_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pdi_resultados_testes_colaborador_id_fkey"
            columns: ["colaborador_id"]
            isOneToOne: false
            referencedRelation: "pdi_colaboradores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pdi_resultados_testes_teste_id_fkey"
            columns: ["teste_id"]
            isOneToOne: false
            referencedRelation: "pdi_testes"
            referencedColumns: ["id"]
          },
        ]
      }
      pdi_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["pdi_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["pdi_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["pdi_role"]
          user_id?: string
        }
        Relationships: []
      }
      pdi_salarios: {
        Row: {
          cargo: string
          created_at: string
          fonte: string
          id: string
          salario: number
        }
        Insert: {
          cargo: string
          created_at?: string
          fonte: string
          id?: string
          salario: number
        }
        Update: {
          cargo?: string
          created_at?: string
          fonte?: string
          id?: string
          salario?: number
        }
        Relationships: []
      }
      pdi_setores: {
        Row: {
          created_at: string
          descricao: string | null
          id: string
          nome: string
        }
        Insert: {
          created_at?: string
          descricao?: string | null
          id?: string
          nome: string
        }
        Update: {
          created_at?: string
          descricao?: string | null
          id?: string
          nome?: string
        }
        Relationships: []
      }
      pdi_testes: {
        Row: {
          created_at: string
          descricao: string | null
          id: string
          nome: string
          tipo: Database["public"]["Enums"]["pdi_tipo_teste"]
        }
        Insert: {
          created_at?: string
          descricao?: string | null
          id?: string
          nome: string
          tipo: Database["public"]["Enums"]["pdi_tipo_teste"]
        }
        Update: {
          created_at?: string
          descricao?: string | null
          id?: string
          nome?: string
          tipo?: Database["public"]["Enums"]["pdi_tipo_teste"]
        }
        Relationships: []
      }
      pdi_testes_bussola: {
        Row: {
          colaborador_id: string
          created_at: string
          id: string
          pontuacao_total: number
          pontuacoes: Json
          respostas: Json
          user_id: string
        }
        Insert: {
          colaborador_id: string
          created_at?: string
          id?: string
          pontuacao_total?: number
          pontuacoes?: Json
          respostas?: Json
          user_id?: string
        }
        Update: {
          colaborador_id?: string
          created_at?: string
          id?: string
          pontuacao_total?: number
          pontuacoes?: Json
          respostas?: Json
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pdi_testes_bussola_colaborador_id_fkey"
            columns: ["colaborador_id"]
            isOneToOne: false
            referencedRelation: "pdi_colaboradores"
            referencedColumns: ["id"]
          },
        ]
      }
      pdi_testes_clevel: {
        Row: {
          colaborador_id: string
          created_at: string
          id: string
          laudo: string | null
          perguntas_aprofundamento: Json | null
          respostas_aprofundamento: Json | null
          respostas_iniciais: Json | null
          status: string
          user_id: string
        }
        Insert: {
          colaborador_id: string
          created_at?: string
          id?: string
          laudo?: string | null
          perguntas_aprofundamento?: Json | null
          respostas_aprofundamento?: Json | null
          respostas_iniciais?: Json | null
          status?: string
          user_id?: string
        }
        Update: {
          colaborador_id?: string
          created_at?: string
          id?: string
          laudo?: string | null
          perguntas_aprofundamento?: Json | null
          respostas_aprofundamento?: Json | null
          respostas_iniciais?: Json | null
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pdi_testes_clevel_colaborador_id_fkey"
            columns: ["colaborador_id"]
            isOneToOne: false
            referencedRelation: "pdi_colaboradores"
            referencedColumns: ["id"]
          },
        ]
      }
      pdi_testes_percentil: {
        Row: {
          colaborador_id: string
          created_at: string
          id: string
          laudo_ia: string | null
          nivel: string
          percentil: number | null
          pontuacoes_abertas: Json | null
          pontuacoes_fechadas: Json | null
          respostas_abertas: Json
          respostas_fechadas: Json
          score_total: number | null
          status: string
          user_id: string
        }
        Insert: {
          colaborador_id: string
          created_at?: string
          id?: string
          laudo_ia?: string | null
          nivel: string
          percentil?: number | null
          pontuacoes_abertas?: Json | null
          pontuacoes_fechadas?: Json | null
          respostas_abertas?: Json
          respostas_fechadas?: Json
          score_total?: number | null
          status?: string
          user_id?: string
        }
        Update: {
          colaborador_id?: string
          created_at?: string
          id?: string
          laudo_ia?: string | null
          nivel?: string
          percentil?: number | null
          pontuacoes_abertas?: Json | null
          pontuacoes_fechadas?: Json | null
          respostas_abertas?: Json
          respostas_fechadas?: Json
          score_total?: number | null
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pdi_testes_percentil_colaborador_id_fkey"
            columns: ["colaborador_id"]
            isOneToOne: false
            referencedRelation: "pdi_colaboradores"
            referencedColumns: ["id"]
          },
        ]
      }
      pdi_testes_perfil: {
        Row: {
          colaborador_id: string
          created_at: string
          id: string
          perfil_dominante: string
          respostas: Json
          resultado: Json
          user_id: string
        }
        Insert: {
          colaborador_id: string
          created_at?: string
          id?: string
          perfil_dominante: string
          respostas: Json
          resultado: Json
          user_id?: string
        }
        Update: {
          colaborador_id?: string
          created_at?: string
          id?: string
          perfil_dominante?: string
          respostas?: Json
          resultado?: Json
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pdi_testes_perfil_colaborador_id_fkey"
            columns: ["colaborador_id"]
            isOneToOne: false
            referencedRelation: "pdi_colaboradores"
            referencedColumns: ["id"]
          },
        ]
      }
      produtos: {
        Row: {
          ativo: boolean
          created_at: string
          descricao: string | null
          id: string
          nome: string
          valor_base: number | null
        }
        Insert: {
          ativo?: boolean
          created_at?: string
          descricao?: string | null
          id?: string
          nome: string
          valor_base?: number | null
        }
        Update: {
          ativo?: boolean
          created_at?: string
          descricao?: string | null
          id?: string
          nome?: string
          valor_base?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          id: string
          nome: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          id: string
          nome: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          id?: string
          nome?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      vendedor_produtos: {
        Row: {
          created_at: string
          id: string
          produto_id: string
          vendedor_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          produto_id: string
          vendedor_id: string
        }
        Update: {
          created_at?: string
          id?: string
          produto_id?: string
          vendedor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendedor_produtos_produto_id_fkey"
            columns: ["produto_id"]
            isOneToOne: false
            referencedRelation: "produtos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendedor_produtos_vendedor_id_fkey"
            columns: ["vendedor_id"]
            isOneToOne: false
            referencedRelation: "vendedores"
            referencedColumns: ["id"]
          },
        ]
      }
      vendedores: {
        Row: {
          ativo: boolean
          cidade_id: string | null
          created_at: string
          email: string
          id: string
          nome: string
          telefone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ativo?: boolean
          cidade_id?: string | null
          created_at?: string
          email: string
          id?: string
          nome: string
          telefone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ativo?: boolean
          cidade_id?: string | null
          created_at?: string
          email?: string
          id?: string
          nome?: string
          telefone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendedores_cidade_id_fkey"
            columns: ["cidade_id"]
            isOneToOne: false
            referencedRelation: "cidades"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      agenda_has_role: {
        Args: {
          _role: Database["public"]["Enums"]["agenda_role"]
          _user_id: string
        }
        Returns: boolean
      }
      agenda_is_admin: { Args: never; Returns: boolean }
      agenda_is_gestor: { Args: never; Returns: boolean }
      check_email_registration: {
        Args: { email_to_check: string }
        Returns: Json
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_admin: { Args: never; Returns: boolean }
      pdi_get_user_setor_ids: { Args: { _user_id: string }; Returns: string[] }
      pdi_has_role: {
        Args: {
          _role: Database["public"]["Enums"]["pdi_role"]
          _user_id: string
        }
        Returns: boolean
      }
      reorder_kanban_colunas: {
        Args: { p_column_ids: string[]; p_kanban_id: string }
        Returns: undefined
      }
    }
    Enums: {
      agenda_role: "comum" | "gestor" | "admin"
      app_role: "admin" | "vendedor"
      pdi_plano_status: "rascunho" | "em_andamento" | "concluido"
      pdi_role: "admin_geral" | "admin_ceo" | "admin_diretor" | "gerente"
      pdi_tipo_teste:
        | "perfil_comportamental"
        | "nivel_clevel"
        | "bussola_alta_performance"
        | "percentil"
      pdi_trilha:
        | "consolidar_conhecimento"
        | "conhecimento_tecnico"
        | "conhecimento_estrategico"
        | "desenvolvimento_pessoal"
        | "leitura_influencers"
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
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
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
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
      agenda_role: ["comum", "gestor", "admin"],
      app_role: ["admin", "vendedor"],
      pdi_plano_status: ["rascunho", "em_andamento", "concluido"],
      pdi_role: ["admin_geral", "admin_ceo", "admin_diretor", "gerente"],
      pdi_tipo_teste: [
        "perfil_comportamental",
        "nivel_clevel",
        "bussola_alta_performance",
        "percentil",
      ],
      pdi_trilha: [
        "consolidar_conhecimento",
        "conhecimento_tecnico",
        "conhecimento_estrategico",
        "desenvolvimento_pessoal",
        "leitura_influencers",
      ],
    },
  },
} as const
