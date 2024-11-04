import React from 'react';
import { Save, Mail, Bell, Database, Cloud } from 'lucide-react';

export default function Settings() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Configurações</h1>

        <div className="mt-6">
          <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Notificações</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Decida quais notificações você deseja receber
                </p>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="email_notifications"
                        name="email_notifications"
                        type="checkbox"
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="email_notifications" className="font-medium text-gray-700 flex items-center">
                        <Mail className="h-5 w-5 mr-2 text-gray-400" />
                        Notificações por Email
                      </label>
                      <p className="text-sm text-gray-500">Receba atualizações sobre novas notas fiscais por email.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="push_notifications"
                        name="push_notifications"
                        type="checkbox"
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="push_notifications" className="font-medium text-gray-700 flex items-center">
                        <Bell className="h-5 w-5 mr-2 text-gray-400" />
                        Notificações Push
                      </label>
                      <p className="text-sm text-gray-500">Receba notificações em tempo real no navegador.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Armazenamento</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Configure as opções de armazenamento das notas fiscais
                </p>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="storage_path" className="block text-sm font-medium text-gray-700 flex items-center">
                      <Database className="h-5 w-5 mr-2 text-gray-400" />
                      Local de Armazenamento
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="storage_path"
                        id="storage_path"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="/caminho/para/armazenamento"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="backup_frequency" className="block text-sm font-medium text-gray-700 flex items-center">
                      <Cloud className="h-5 w-5 mr-2 text-gray-400" />
                      Frequência de Backup
                    </label>
                    <select
                      id="backup_frequency"
                      name="backup_frequency"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option>Diário</option>
                      <option>Semanal</option>
                      <option>Mensal</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Save className="h-5 w-5 mr-2" />
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}